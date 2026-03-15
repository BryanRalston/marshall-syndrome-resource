const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Fix PATH so child processes can find taskkill.exe etc.
const sys32 = 'C:\\Windows\\System32';
if (!process.env.PATH.includes(sys32)) process.env.PATH = sys32 + ';' + process.env.PATH;

const PDF_PATH = path.join(__dirname, 'preprint-drug-repurposing.pdf');
const SS_DIR = path.join(__dirname, 'automation_screenshots');
if (!fs.existsSync(SS_DIR)) fs.mkdirSync(SS_DIR, { recursive: true });

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  console.log('=== Zenodo One-Click Setup ===\n');
  console.log('A browser will open. You just need to:');
  console.log('  1. Click "Sign in with GitHub" on Zenodo');
  console.log('  2. Authorize if prompted on GitHub');
  console.log('  3. The script handles EVERYTHING else.\n');

  // Use bundled Chromium (no singleton issues)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--no-first-run', '--no-default-browser-check', '--window-size=1400,900']
  });

  const page = await browser.newPage();

  // Go straight to Zenodo login
  await page.goto('https://zenodo.org/login/', { waitUntil: 'networkidle2', timeout: 90000 });
  console.log('Zenodo login page loaded.');
  console.log('>>> CLICK "Sign in with GitHub", then authorize if asked. <<<');
  console.log('    Waiting for you to log in...\n');

  // Wait for redirect back to Zenodo (user logs in manually)
  for (let i = 0; i < 120; i++) {
    await sleep(2000);
    const url = page.url();
    if (url.includes('zenodo.org') && !url.includes('/login') && !url.includes('/oauth')) {
      console.log('✓ Logged into Zenodo!\n');
      break;
    }
    if (i === 59) console.log('  Still waiting... take your time.');
  }

  const url = page.url();
  if (url.includes('/login')) {
    console.log('Timed out. Closing.');
    await browser.close();
    return;
  }

  // === FROM HERE: FULLY AUTOMATED ===
  console.log('=== Automating everything from here ===\n');

  // Navigate to new upload
  console.log('Going to upload page...');
  await page.goto('https://zenodo.org/uploads/new', { waitUntil: 'networkidle2', timeout: 90000 });
  await sleep(3000);
  console.log('URL:', page.url());
  await page.screenshot({ path: path.join(SS_DIR, 'z_upload_page.png'), fullPage: true });

  // Analyze page structure
  const info = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().substring(0, 60));
    const inputs = Array.from(document.querySelectorAll('input[type="file"]'));
    const fields = Array.from(document.querySelectorAll('input:not([type="hidden"]):not([type="file"]), textarea, [contenteditable="true"]'))
      .map(el => ({ tag: el.tagName, id: el.id||'', name: el.name||'', ph: el.placeholder||'', aria: el.getAttribute('aria-label')||'', type: el.type||'' }));
    return { buttons: btns, fileInputs: inputs.length, fields };
  });
  console.log('File inputs:', info.fileInputs);
  console.log('Buttons:', info.buttons.join(' | '));
  console.log('Fields:');
  info.fields.forEach(f => console.log(`  ${f.tag} id="${f.id}" name="${f.name}" ph="${f.ph}" aria="${f.aria}"`));

  // Upload PDF
  console.log('\nUploading PDF...');
  await page.evaluate(() => {
    document.querySelectorAll('input[type="file"]').forEach(el => {
      el.style.cssText = 'display:block!important;visibility:visible!important;opacity:1!important;height:50px!important;width:400px!important;';
    });
  });
  await sleep(500);

  let fi = await page.$('input[type="file"]');
  if (!fi) {
    // Click upload/add button
    await page.evaluate(() => {
      for (const b of document.querySelectorAll('button, [role="button"]')) {
        const t = b.textContent.toLowerCase();
        if (t.match(/upload|add|file|browse|start/)) { console.log('clicking:', t); b.click(); break; }
      }
    });
    await sleep(2000);
    await page.evaluate(() => {
      document.querySelectorAll('input[type="file"]').forEach(el => {
        el.style.cssText = 'display:block!important;visibility:visible!important;opacity:1!important;height:50px!important;';
      });
    });
    fi = await page.$('input[type="file"]');
  }

  if (fi) {
    await fi.uploadFile(PDF_PATH);
    console.log('✓ PDF file selected');
    // Wait for upload to complete
    console.log('Waiting for upload...');
    for (let i = 0; i < 30; i++) {
      await sleep(1000);
      const progress = await page.evaluate(() => {
        const p = document.querySelector('[class*="progress"], [role="progressbar"], .upload-progress');
        return p ? p.textContent || p.getAttribute('aria-valuenow') : null;
      });
      if (progress) console.log('  Progress:', progress);
      // Check if file appears in the list
      const fileVisible = await page.evaluate(() => {
        const text = document.body.innerText;
        return text.includes('preprint-drug-repurposing') || text.includes('.pdf');
      });
      if (fileVisible && i > 5) { console.log('✓ File uploaded'); break; }
    }
    await page.screenshot({ path: path.join(SS_DIR, 'z_file_uploaded.png'), fullPage: true });
  } else {
    console.log('No file input found - check screenshot');
    await page.screenshot({ path: path.join(SS_DIR, 'z_no_file_input.png'), fullPage: true });
  }

  // Fill resource type
  console.log('\nFilling metadata...');

  // Re-scan fields after upload
  const updatedFields = await page.evaluate(() =>
    Array.from(document.querySelectorAll('input:not([type="hidden"]):not([type="file"]), textarea, select, [contenteditable="true"]'))
      .map(el => ({ tag: el.tagName, type: el.type||'', id: el.id||'', name: el.name||'', ph: el.placeholder||'', aria: el.getAttribute('aria-label')||'', ce: el.isContentEditable }))
  );
  console.log(`Found ${updatedFields.length} fields after upload`);
  updatedFields.forEach(f => console.log(`  ${f.tag} type=${f.type} id="${f.id}" name="${f.name}" ph="${f.ph}" aria="${f.aria}" ce=${f.ce}`));

  // Try resource type
  for (const f of updatedFields) {
    const key = (f.id + f.name + f.ph + f.aria).toLowerCase();
    const sel = f.id ? `[id="${f.id}"]` : (f.name ? `[name="${f.name}"]` : null);
    if (!sel) continue;

    try {
      if (key.match(/resource.?type/) && !key.includes('add')) {
        await page.click(sel);
        await page.evaluate(s => { const e = document.querySelector(s); if (e) e.value = ''; }, sel);
        await page.type(sel, 'Preprint');
        await sleep(1500);
        // Click the matching dropdown option
        const options = await page.$$('[role="option"], .item, .suggestion, li.item');
        for (const opt of options) {
          const t = await page.evaluate(e => e.textContent.toLowerCase(), opt);
          if (t.includes('preprint')) { await opt.click(); console.log('✓ Resource type: Preprint'); break; }
        }
        await sleep(500);
      }
    } catch(e) { console.log('Resource type error:', e.message); }
  }

  // Title
  for (const f of updatedFields) {
    const key = (f.id + f.name + f.ph + f.aria).toLowerCase();
    if (key.includes('title') && !key.includes('alt') && !key.includes('journal') && !key.includes('additional') && f.tag !== 'SELECT') {
      const sel = f.id ? `[id="${f.id}"]` : `[name="${f.name}"]`;
      try {
        await page.click(sel);
        await page.evaluate(s => { const e = document.querySelector(s); if (e) e.value = ''; }, sel);
        await page.type(sel, 'A Systematic Drug Repurposing Screen for Marshall Syndrome: Targeting Eight Self-Amplifying Destructive Cascades in COL11A1 Collagenopathy');
        console.log('✓ Title');
        break;
      } catch(e) { console.log('Title error:', e.message); }
    }
  }

  // Description (rich text editor)
  const descText = 'Marshall syndrome (COL11A1/Stickler type 2) is a rare autosomal dominant collagenopathy with no approved disease-modifying therapies. We present a systematic screen of 34 existing medications mapped to 8 self-amplifying destructive cascades that drive progressive tissue degradation. Compounds were ranked using a 5-domain composite scoring system encompassing evidence strength, safety profile, mechanistic directness, accessibility, and cascade coverage. Network connectivity analysis identifies Loop 3 (Senescence/SASP) as the highest-leverage intervention target, with the greatest downstream influence on remaining cascades. Top candidates include doxycycline (MMP/ADAMTS inhibition), N-acetylcysteine (ferroptosis and oxidative stress), metformin (senolytic and anti-inflammatory), and diacerein (IL-1 blockade with chondroprotection). A tiered combination strategy is proposed alongside an N-of-1 trial protocol designed for clinical translation in ultra-rare populations where conventional trial recruitment is infeasible.';

  const descEditor = await page.$('.ck-editor__editable, .ProseMirror, [contenteditable="true"]:not([role="combobox"]), div[role="textbox"]');
  if (descEditor) {
    await descEditor.click();
    await sleep(300);
    await page.keyboard.type(descText);
    console.log('✓ Description');
  }

  // Creators - family name, given name
  for (const f of updatedFields) {
    const key = (f.id + f.name + f.ph + f.aria).toLowerCase();
    const sel = f.id ? `[id="${f.id}"]` : (f.name ? `[name="${f.name}"]` : null);
    if (!sel) continue;
    try {
      if (key.match(/family|last.?name|surname/)) {
        await page.type(sel, 'Ralston');
        console.log('✓ Family name');
      } else if (key.match(/given|first.?name/) && !key.includes('email')) {
        await page.type(sel, 'Bryan');
        console.log('✓ Given name');
      }
    } catch {}
  }

  await sleep(500);

  // Scroll down to look for more fields (access rights, license, etc.)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await sleep(1000);

  // Try to set access to Open Access
  await page.evaluate(() => {
    const radios = document.querySelectorAll('input[type="radio"]');
    for (const r of radios) {
      const label = r.labels?.[0]?.textContent?.toLowerCase() || '';
      const val = (r.value || '').toLowerCase();
      if (label.includes('open') || val.includes('open') || val.includes('public')) {
        r.click();
        return;
      }
    }
  });

  // Try to set license
  for (const f of updatedFields) {
    const key = (f.id + f.name + f.ph + f.aria).toLowerCase();
    if (key.includes('license')) {
      const sel = f.id ? `[id="${f.id}"]` : `[name="${f.name}"]`;
      try {
        await page.click(sel);
        await page.type(sel, 'Creative Commons Attribution 4.0');
        await sleep(1500);
        const opt = await page.$('[role="option"]');
        if (opt) await opt.click();
        console.log('✓ License');
      } catch {}
      break;
    }
  }

  await page.screenshot({ path: path.join(SS_DIR, 'z_metadata_filled.png'), fullPage: true });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await sleep(500);
  await page.screenshot({ path: path.join(SS_DIR, 'z_bottom.png'), fullPage: true });

  // Publish
  console.log('\nLooking for Publish button...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);

  const publishBtn = await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    for (const b of btns) {
      const t = b.textContent.trim().toLowerCase();
      if (t.includes('publish') && !b.disabled) {
        b.scrollIntoView();
        return t;
      }
    }
    // Also check for Save/Preview first
    for (const b of btns) {
      const t = b.textContent.trim().toLowerCase();
      if (t.includes('save') || t.includes('preview') || t.includes('submit')) {
        return 'alt: ' + t;
      }
    }
    return null;
  });
  console.log('Publish button:', publishBtn);

  if (publishBtn && !publishBtn.startsWith('alt:')) {
    // Click publish
    await page.evaluate(() => {
      for (const b of document.querySelectorAll('button')) {
        if (b.textContent.trim().toLowerCase().includes('publish') && !b.disabled) {
          b.click(); return;
        }
      }
    });
    console.log('Clicked Publish');
    await sleep(3000);
    await page.screenshot({ path: path.join(SS_DIR, 'z_after_publish.png'), fullPage: true });

    // Confirm if dialog appears
    const confirmed = await page.evaluate(() => {
      const btns = document.querySelectorAll('.modal button, [role="dialog"] button, .confirmation button, button');
      for (const b of btns) {
        const t = b.textContent.trim().toLowerCase();
        if ((t === 'publish' || t.includes('confirm') || t === 'yes' || t === 'ok') && !b.disabled) {
          b.click();
          return t;
        }
      }
      return null;
    });
    if (confirmed) console.log('Confirmed:', confirmed);
    await sleep(5000);
  } else {
    console.log('No publish button found yet. You may need to fill required fields.');
    console.log('Taking screenshot for review...');
  }

  await page.screenshot({ path: path.join(SS_DIR, 'z_final.png'), fullPage: true });

  // Extract DOI
  const finalUrl = page.url();
  const bodyText = await page.evaluate(() => document.body.innerText);
  const doiMatch = bodyText.match(/10\.5281\/zenodo\.\d+/);

  console.log('\n' + '='.repeat(50));
  if (doiMatch) {
    const doi = doiMatch[0];
    console.log(`  DOI: ${doi}`);
    console.log(`  URL: https://doi.org/${doi}`);
    fs.writeFileSync(path.join(__dirname, 'zenodo_doi.txt'), JSON.stringify({
      doi, url: `https://doi.org/${doi}`, record: finalUrl, date: new Date().toISOString()
    }, null, 2));
    console.log('  Saved to zenodo_doi.txt');
  } else {
    console.log('  Final URL:', finalUrl);
    console.log('  Check browser for status / required fields');
  }
  console.log('='.repeat(50));

  // Keep browser open so user can review
  console.log('\nBrowser staying open for review. Close it when done.');
  console.log('(Auto-closing in 5 minutes)');
  await sleep(300000);
  await browser.close();
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });

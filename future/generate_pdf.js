const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();

  // Load the preprint page
  await page.goto('http://localhost:8080/future/preprint-drug-repurposing.html', {
    waitUntil: 'load',
    timeout: 15000
  });

  // Wait for render
  await new Promise(r => setTimeout(r, 2000));

  // Hide the sidebar, header, hamburger, back-to-top button, and search for clean PDF
  await page.addStyleTag({content: `
    .sidebar, .sidebar-overlay, .site-header, .hamburger, .back-to-top, .search-wrapper, .search-count, #breadcrumb { display: none !important; }
    .main { margin-left: 0 !important; padding-top: 0 !important; }
    .content { max-width: 100% !important; }
    body { font-size: 11pt; }
    h1 { font-size: 16pt; }
    h2 { font-size: 13pt; }
    h3 { font-size: 12pt; }
    table { font-size: 9pt; }
    .callout { break-inside: avoid; }
  `});

  await page.pdf({
    path: 'C:/Cortex/marshall-syndrome-resource/future/preprint-drug-repurposing.pdf',
    format: 'Letter',
    margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8pt;color:#999;width:100%;text-align:center;margin-top:4px;">PREPRINT — NOT PEER-REVIEWED</div>',
    footerTemplate: '<div style="font-size:8pt;color:#999;width:100%;text-align:center;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
  });

  await browser.close();
  console.log('PDF generated successfully');
})();

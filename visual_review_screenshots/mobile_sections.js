const puppeteer = require('puppeteer');
const path = require('path');

const BASE = 'http://localhost:8765';
const OUT = __dirname;

// Take viewport-only screenshots at multiple scroll positions for mobile pages
const pages = [
  { name: 'homepage', url: '/' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });

  for (const pg of pages) {
    console.log(`Loading ${pg.name}...`);
    await page.goto(BASE + pg.url, { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 500));

    // Top
    await page.screenshot({ path: path.join(OUT, `${pg.name}_mobile_top.png`), fullPage: false });
    console.log(`  -> ${pg.name}_mobile_top.png`);

    // Scroll 30%
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.15));
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT, `${pg.name}_mobile_15pct.png`), fullPage: false });
    console.log(`  -> ${pg.name}_mobile_15pct.png`);

    // Scroll 50%
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT, `${pg.name}_mobile_50pct.png`), fullPage: false });
    console.log(`  -> ${pg.name}_mobile_50pct.png`);

    // Bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(OUT, `${pg.name}_mobile_bottom.png`), fullPage: false });
    console.log(`  -> ${pg.name}_mobile_bottom.png`);
  }

  await browser.close();
  console.log('Done!');
})();

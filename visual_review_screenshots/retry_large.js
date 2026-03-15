const puppeteer = require('puppeteer');
const path = require('path');

const BASE = 'http://localhost:8765';
const OUT = __dirname;

// Pages that failed fullPage at desktop - try viewport-only top and scrolled sections
const pages = [
  { name: 'homepage', url: '/' },
  { name: 'future-ai-drug', url: '/future/ai-drug-discovery.html' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const pg of pages) {
    // Desktop top portion
    await page.setViewport({ width: 1280, height: 900 });
    console.log(`Screenshotting ${pg.name} @ desktop (top)`);
    try {
      await page.goto(BASE + pg.url, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({ path: path.join(OUT, `${pg.name}_desktop_top.png`), fullPage: false });
      console.log(`  -> ${pg.name}_desktop_top.png`);
    } catch (err) {
      console.error(`  ERROR top: ${err.message}`);
    }

    // Desktop middle
    try {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.3));
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join(OUT, `${pg.name}_desktop_mid.png`), fullPage: false });
      console.log(`  -> ${pg.name}_desktop_mid.png`);
    } catch (err) {
      console.error(`  ERROR mid: ${err.message}`);
    }

    // Desktop bottom
    try {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.7));
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join(OUT, `${pg.name}_desktop_bottom.png`), fullPage: false });
      console.log(`  -> ${pg.name}_desktop_bottom.png`);
    } catch (err) {
      console.error(`  ERROR bottom: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
})();

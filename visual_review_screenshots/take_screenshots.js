const puppeteer = require('puppeteer');
const path = require('path');

const BASE = 'http://localhost:8765';
const OUT = __dirname;

const pages = [
  { name: 'homepage', url: '/' },
  { name: 'basics', url: '/basics/' },
  { name: 'treatment', url: '/treatment/' },
  { name: 'treatment-metformin', url: '/treatment/metformin.html' },
  { name: 'living', url: '/living/' },
  { name: 'emerging', url: '/emerging/' },
  { name: 'future-ai-drug', url: '/future/ai-drug-discovery.html' },
  { name: 'resources-newly-diagnosed', url: '/resources/newly-diagnosed.html' },
  { name: 'spine', url: '/spine/' },
  { name: 'monitoring-biomarker', url: '/monitoring/biomarker-dashboard.html' },
];

const viewports = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const pg of pages) {
    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      const url = BASE + pg.url;
      console.log(`Screenshotting ${pg.name} @ ${vp.name} (${vp.width}px) - ${url}`);
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
        // Wait a moment for any CSS transitions
        await new Promise(r => setTimeout(r, 500));
        const filename = `${pg.name}_${vp.name}.png`;
        await page.screenshot({ path: path.join(OUT, filename), fullPage: true });
        console.log(`  -> ${filename}`);
      } catch (err) {
        console.error(`  ERROR: ${err.message}`);
      }
    }
  }

  await browser.close();
  console.log('Done!');
})();

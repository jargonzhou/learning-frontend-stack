// https://developer.chrome.com/docs/puppeteer/get-started/
// https://pptr.dev/

// MacOS: ~/.cache/puppeteer

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  console.log(await browser.version())
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

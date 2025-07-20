import { ProxyConfiguration } from 'crawlee';
import { AppCrawler, AppCrawlerConfig, AppCrawlerType } from './crawler';

async function main() {
  // const proxyConfig: ProxyConfiguration = new ProxyConfiguration({
  //   proxyUrls: [
  //     '<http://proxy-1.com>'
  //   ]
  // });

  const config: AppCrawlerConfig = {
    // type: AppCrawlerType.Cheerio,
    // startUrls: ['<https://crawlee.dev>'],

    type: AppCrawlerType.Playwright,
    startUrls: ['https://examples.com'],
    headless: false,

    maxRequestsPerCrawl: 10,
    // proxy: proxyConfig
  }

  const crawler: AppCrawler = new AppCrawler(config);
  await crawler.start();
}

(async function() {
  await main()
})();
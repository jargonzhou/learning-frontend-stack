import {
  CheerioCrawler,
  PuppeteerCrawler,
  PlaywrightCrawler,

  RequestQueue,
  Dataset,
  ProxyConfiguration,
  SessionPoolOptions,
  AutoscaledPoolOptions,
  BrowserName,
  DeviceCategory,
  OperatingSystemsName,
  PlaywrightPlugin
} from "crawlee";

enum AppCrawlerType {
  Cheerio,
  Puppeteer,
  Playwright
}

type AppCrawlerConfig = {
  startUrls: string[];
  maxRequestsPerCrawl: number;
  type: AppCrawlerType;

  headless?: boolean;

  // proxy
  proxy?: ProxyConfiguration;

  // session
  useSessionPool?: boolean;
  sessionPoolOptions?: SessionPoolOptions;
  persistCookiesPerSession?: boolean

  // concurrency
  minCurrency?: number
  maxCurrency?: number
  maxRequestsPerMinute?: number
  // autoscaledPool
  autoscaledPoolOptions?: AutoscaledPoolOptions

}

class AppCrawler {
  private _config: AppCrawlerConfig | null
  private _requestQueue: RequestQueue | undefined
  private _crawler: CheerioCrawler | PuppeteerCrawler | PlaywrightCrawler | undefined

  constructor(config: AppCrawlerConfig) {
    this._config = config;
    this._requestQueue = undefined
    this._crawler = undefined
  }

  get startUrls(): string[] {
    return this._config!.startUrls;
  }

  async start(): Promise<void> {
    console.log(`Initialize ${this._config!.type} crawler request queue with urls: ${this._config!.startUrls}`);

    this._requestQueue = await RequestQueue.open();
    await this._requestQueue.addRequestsBatched(this._config!.startUrls);

    switch (this._config!.type) {
      case AppCrawlerType.Cheerio:
        this._crawler = this.newCheerioCrawler();
        break;
      case AppCrawlerType.Puppeteer:
        throw new Error("Unsupported yet!")
      case AppCrawlerType.Playwright:
        // <https://crawlee.dev/api/playwright-crawler/class/PlaywrightCrawler>
        this._crawler = this.newPlaywrightCrawler();
    }

    console.log(`Start the ${this._config!.type} crawler with urls: ${this._config!.startUrls}`);
    await this._crawler.run();
  }

  private newCheerioCrawler(): CheerioCrawler {
    return new CheerioCrawler({
      requestQueue: this._requestQueue,

      proxyConfiguration: this._config!.proxy,

      async requestHandler({ request, $, enqueueLinks, log, proxyInfo, session }) {
        const title = $('title').text();
        log.info(`[${proxyInfo}] Title of ${request.loadedUrl} is '${title}'`);

        // 
        await Dataset.pushData({ title, url: request.loadedUrl });

        // RequestQueue
        await enqueueLinks();

        if (session) {
          session.markGood();
        }
      },
    });
  }

  private newPlaywrightCrawler(): PlaywrightCrawler {
    return new PlaywrightCrawler(
      // options: <https://crawlee.dev/api/playwright-crawler/interface/PlaywrightCrawlerOptions>

      {
        // browserPoolOptions
        browserPoolOptions: {
          useFingerprints: true,
          maxOpenPagesPerBrowser: 10,
          retireBrowserAfterPageCount: 10,
          operationTimeoutSecs: 10,
          closeInactiveBrowserAfterSecs: 10,
          fingerprintOptions: {
            useFingerprintCache: true,
            fingerprintCacheSize: 10000,
            fingerprintGeneratorOptions: {
              browsers: [
                { name: BrowserName.chrome }
              ],
              devices: [
                DeviceCategory.desktop,
              ],
              operatingSystems: [
                OperatingSystemsName.linux
              ]
            }
          },
          // browser plugins
          // browserPlugins: [
          // ]
        },

        // proxyConfiguration
        proxyConfiguration: this._config!.proxy,
        // sessionPoolOptions
        useSessionPool: this._config!.useSessionPool,
        sessionPoolOptions: this._config!.sessionPoolOptions,
        persistCookiesPerSession: this._config!.persistCookiesPerSession,

        requestQueue: this._requestQueue,
        headless: this._config!.headless!,

        keepAlive: true,
        maxRequestRetries: 3,
        maxRequestsPerCrawl: 1000,
        maxRequestsPerMinute: 1000,

        // TODO(zhoujiagen): 怎么判断需要session切换的???
        maxSessionRotations: 3,

        // Indicates how much time (in seconds) to wait before crawling another same domain request.
        sameDomainDelaySecs: 1,

        // If set to true, the crawler will automatically try to bypass any detected bot protection.
        retryOnBlocked: true,

        statusMessageLoggingInterval: 10,
        statusMessageCallback: async (ctx) => {
          return ctx.crawler.setStatusMessage(`status message`, { level: 'INFO' });
        },

        async requestHandler({ page, parseWithCheerio, enqueueLinks, log, proxyInfo, session }) {
          log.info(`[${proxyInfo}] access page: ${page.url}`);

          await page.waitForSelector('div[data-test="actorCard"]');
          const $ = await parseWithCheerio();
          $('div[data-test="actorCard"]').each((i, e) => {
            const text = $(e).text();
            console.log(`ACTOR_${i + 1}: ${text}\\n`);
          });

          await enqueueLinks({

          });

          // More condition to check whether session is good
          if (session) {
            session.markGood();
          }
        }, // end of requestHandler

        async failedRequestHandler({ request, log }) {
          log.error(`Request ${request.url} failed.`)
        },
        async errorHandler(ctx, error) {
          console.error(`[${ctx.proxyInfo}] ${ctx.page.url} failed, id=${ctx.id}`, error);
        }
      }
      // config
    )
  }
}

export { AppCrawlerType, AppCrawler, AppCrawlerConfig };
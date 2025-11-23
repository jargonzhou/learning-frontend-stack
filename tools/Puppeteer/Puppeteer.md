# Puppeteer
* https://pptr.dev/
* https://github.com/puppeteer/puppeteer

> Puppeteer is a JavaScript library which provides a high-level API to control Chrome or Firefox over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) or [WebDriver BiDi](https://pptr.dev/webdriver-bidi). Puppeteer runs in the headless (no visible UI) by default.

```shell
✗ npm install puppeteer

✗ npm run dev
```

Example:

![](./example.png)

<!--
FAQ:

- How to resolve Puppeteer dependencies like error while loading shared libraries: libgtk-3.so.0: https://www.publish0x.com/dev/how-to-resolve-puppeteer-dependencies-like-error-while-loadi-xwnjgee
```shell
sudo apt install libnss3-dev libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libpangocairo-1.0-0 libgtk-3-0
sudo apt install libasound2
```

Proxy:
- [Free Proxy List](https://free-proxy-list.net/)
- [How to Use a Puppeteer Proxy in 2023](https://www.zenrows.com/blog/puppeteer-proxy)
- [How to use proxy in puppeteer and headless Chrome?](https://stackoverflow.com/questions/52777757/how-to-use-proxy-in-puppeteer-and-headless-chrome)
```javascript
const browser = await puppeteer.launch({
    // Launch chromium using a proxy server on port 9876.
    // More on proxying:
    //    https://www.chromium.org/developers/design-documents/network-settings
    args: [ '--proxy-server=127.0.0.1:9876' ]
  });

// puppeteer-page-proxy

const context = await browser.createIncognitoBrowserContext({ proxy: 'http://localhost:2022' });
const page = await context.newPage();
await page.authenticate({username:user, password:password});
await page.goto('https://example.com');
await context.close();
// proxy-chain

// puppeteer-proxy
```

More:

- Headless Chrome For Java （Java 爬虫）: https://github.com/fanyong920/jvppeteer
- Web Scraping with a Headless Browser: A Puppeteer Tutorial: https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial
- 结合项目来谈谈 Puppeteer https://zhuanlan.zhihu.com/p/76237595
- [一日一技：Puppeteer 不重启如何更换代理 IP_51CTO博客_puppeteer设置代理](https://blog.51cto.com/u_15023263/4861528)
- [【Pyppeteer或Puppeteer】网络爬虫反反爬小技巧【Pyppeteer完美突破被js或服务器识别检测的解决方案】_pyppeteer检测应对-CSDN博客](https://blog.csdn.net/weixin_43343144/article/details/113242647)
- [【Puppeteer】解决在headless为true时的网站反爬虫机制的限制_headless=true_在全栈的路上打酱油的博客-CSDN博客](https://blog.csdn.net/weixin_42078672/article/details/126328971)
- [如何避免Puppeteer被反爬_puppeteer反爬解决_心伽玛的博客-CSDN博客](https://blog.csdn.net/weixin_45114252/article/details/112264147)
- [(Linux Mac)Puppeteer加代理爬坑(隧道代理) 加代理的两种方式(Linux Mac)-CSDN博客](https://blog.csdn.net/m0_37089544/article/details/82225036)
-->

# See Also
* [Getting Started with Headless Chrome](https://developer.chrome.com/blog/headless-chrome/)
* [Chrome Developers](https://developer.chrome.com/docs/puppeteer/)
* [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/): The Chrome DevTools Protocol(CDP) allows for tools to instrument, inspect, debug and profile Chromium, Chrome and other Blink-based browsers. Many existing projects currently use the protocol. The [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) uses this protocol and the team maintains its API.
Instrumentation is divided into a number of domains (DOM, Debugger, Network etc.). Each domain defines a number of commands it supports and events it generates. Both commands and events are serialized JSON objects of a fixed structure. 
* [WebDriver BiDi](https://pptr.dev/webdriver-bidi): WebDriver BiDi is a new cross-browser automation protocol currently under development, aiming to combine the best of both WebDriver “Classic” and CDP. WebDriver BiDi enables bi-directional communication, making it fast by default, and it comes packed with low-level control.
* [Chromium command line switches](https://peter.sh/experiments/chromium-command-line-switches/)
* [browserless](https://github.com/browserless/browserless): Browserless allows remote clients to connect and execute headless work, all inside of docker. It supports the standard, unforked Puppeteer and Playwright libraries, as well offering REST-based APIs for common actions like data collection, PDF generation and more.

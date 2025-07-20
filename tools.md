# Tools

## Babel
* https://babeljs.io/

Babel is a JavaScript compiler.
> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 
> 
> Here are the main things Babel can do for you:
>
>- Transform syntax
>- Polyfill features that are missing in your target environment (through a third-party polyfill such as `core-js`)
>- Source code transformations (codemods)
>- And more!

## Bootstrap
* https://getbootstrap.com/

> Build fast, responsive sites with Bootstrap
> Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.

```shell
npm install bootstrap@5.3.3
```

include via CDN
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

- [Bootstrap and Vite](https://getbootstrap.com/docs/5.3/getting-started/vite/)


## Chai
* https://github.com/chaijs/chai

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Crawlee
* [crawlee.md](./crawlee/crawlee.md)

## Deno
* https://www.deno.com/

> [Deno](https://www.deno.com/) ([/ˈdiːnoʊ/](http://ipa-reader.xyz/?text=%CB%88di%CB%90no%CA%8A), pronounced `dee-no`) is a JavaScript, TypeScript, and WebAssembly **runtime** with secure defaults and a great developer experience. It's built on [V8](https://v8.dev/), [Rust](https://www.rust-lang.org/), and [Tokio](https://tokio.rs/).

## ESLint
* https://eslint.org/
* [shared eslint config](https://www.npmjs.com/search?q=keywords:eslintconfig)

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

```shell
npm init @eslint/config
```

## Jest
* https://github.com/jestjs/jest
* [Jest Testing: A Helpful, Introductory Tutorial](https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/)

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

It works with projects using: [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/), [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/) and more!

```shell
# 安装
npm install --save-dev jest
npm install --save-dev ts-jest
npm install --save-dev @jest/globals

# 生成配置文件
npx jest --init
npx ts-jest config:init

# 配置参考 ESM Support: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support

# VSCode插件: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
```

## jQuery
* https://jquery.com/

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

## JSDOc
* https://jsdoc.app/
  
An API documentation generator for JavaScript.

## Lodash
* https://lodash.com/

> Why Lodash?

Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

Lodash’s modular methods are great for:
* Iterating arrays, objects, & strings
* Manipulating & testing values
* Creating composite functions

## Mocha
* https://mochajs.org/

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

## nodemon
* https://nodemon.io/

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
>
nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for `node`. To use `nodemon`, replace the word `node` on the command line when executing your script.

```shell
npm install -g nodemon # or using yarn: yarn global add nodemon

npm install --save-dev nodemon # or using yarn: yarn add nodemon -D
```

* [Sample nodemon.json](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)

package.json
```json
"nodemonConfig": {
    "verbose": true,
    "events": {
      "start": "cls || clear"
    },
    "watch": [
      "api"
    ],
    "ext": "js",
    "exec": "cd api && node --inspect=127.0.0.1:9229 server.js"
  }
```
VSCode launch.json
```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  // Node.js debugging in VS Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to node",
      "type": "node",
      "request": "attach",
      "restart": true,
      "port": 9229
    }
  ]
}
```

## npm
* [npm.md](./npm/npm.md)

## Parcel
* https://parceljs.org/

> Parcel is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.

- [example](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#using_the_package_ecosystem)
```shell
npm install parcel-bundler

npx parcel index.html
npx parcel build index.html
npx parcel build index.html --experimental-scope-hoisting
```

## Playwright
* [playwright.md](./playwright/playwright.md)


## Prettier
* https://prettier.io/

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Puppeteer
* https://pptr.dev/
* [Chrome Developers](https://developer.chrome.com/docs/puppeteer/)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Chromium command line switches](https://peter.sh/experiments/chromium-command-line-switches/)

> Puppeteer is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol. Puppeteer runs in headless mode by default, but can be configured to run in full ("headful") Chrome/Chromium.

[browserless](https://github.com/browserless/browserless): Browserless allows remote clients to connect and execute headless work, all inside of docker. It supports the standard, unforked Puppeteer and Playwright libraries, as well offering REST-based APIs for common actions like data collection, PDF generation and more.

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

## Vite
* https://vitejs.dev/
* [vitejs/awesome-vite](https://github.com/vitejs/awesome-vite): A curated list of awesome things related to Vite.js

> Next Generation Frontend Tooling
> Get ready for a development environment that can finally catch up with you.

* [Plugins](https://vitejs.dev/plugins/)
	- [Rollup's Plugin](https://rollupjs.org/plugin-development/)

### Scaffolding

* [Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
* [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite): template source
	- [Using Vite for regular websites and not SPA/JS frameworks](https://www.reddit.com/r/webdev/comments/1276b4y/using_vite_for_regular_websites_and_not_spajs/?rdt=60545)
* templates
	- vanilla, vanilla-ts: no framework
	- vue, vue-ts
	- react, react-ts, react-swc, react-swc-ts
	- preact, preact-ts
	- lit, lit-ts
	- svelte, svelte-ts
	- solid, solid-ts
	- qwik, qwik-ts

> [!note] [SWC: Speedy Web Compiler](https://swc.rs/)
Rust-based platform for the Web
>
SWC is an extensible Rust-based platform for the next generation of fast developer tools. It's used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, and more.
>
SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.
>
>SWC is 20x faster than Babel on a single thread and 70x faster on four cores.

```shell
npm create vite@latest # NPM
yarn create vite # Yarn
pnpm create vite # PNPM
bun create vite # Bun

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue
```

### Env Variables and Modes
* [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)
* [dotenv-expand](https://github.com/motdotla/dotenv-expand): Variable expansion for `dotenv`. Expand variables already on your machine for use in your `.env` file.

### vite-express
* [vite-express](https://github.com/szymmis/vite-express)

## webpack
* [webpack](./webpack/webpack.md)
* alternatives: Parcel, Rollup


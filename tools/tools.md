# Tools
# IDE
## VS Code
* [JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
* [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig): `jsconfig.json` is `tsconfig.json` with `"allowJs"` attribute set to `true`.

# Developer Tools

* [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html): Documentation for the set of web-developer tools built into Firefox.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/): Documentation for the set of web-developer tools built into Chrome.
* [Safari Web Inspector](https://webkit.org/web-inspector/): Documentation for the set of web-developer tools built into Safari.
* [Edge DevTools](https://learn.microsoft.com/en-us/microsoft-edge/devtools/landing/): Documentation for the set of web-developer tools built into Edge.

# Skaffold
* [Vite](./Vite/Vite.md): Vite is a new breed of frontend build tooling that significantly improves the frontend development experience.
* [Yeoman](https://yeoman.io/)
	- [Getting Started With Yeoman](https://yeoman.io/learning/)
	- [Node 14 with warning (node:31518) Warning: Accessing non-existent property 'column' of module exports inside circular dependency](https://github.com/nodejs/node/issues/32987)

* [Create App: Frontend build config generator](https://createapp.dev/)
	- webpack, Parcel, Snowpack
	- Main library: No, React, Svelte, Vue
	- UI library: Bootstrap, Tailwind CSS
	- Test framework: Jest, Mocha, Chai, Jasmine, AVA, Cypress, TestCafe
	- Transpiler: Babel, Typescript
	- Styling: CSS, CSS Modules, PostCSS, Sass, Less, stylus
	- Image: SVG, PNG
	- Utilities: moment, lodash
	- Linting: ESLint, Prettier
	- Optimization: Code split vendors
	- Webpack plugins: HTML webpack plugin, Webpack Bundle Analyzer, MiniCssExtractPlugin, CopyWebpackPlugin, CleanWebpackPlugin

## See Also
* [Learn setting up a simple Frontend environment for beginners](https://github.com/imalitavakoli/learn-frontend-env-setup): 2023-07, Github, Let's learn setting up a simple Frontend Developing environment for beginners!
* [How to Build a reusable Javascript development environment](https://medium.com/the-andela-way/how-to-build-a-reusable-javascript-development-environment-f13146b77fdf): 2019-06
* [Modern Javascript Development Environment](https://dev.to/tech_nikkhil/modern-javascript-development-environment-nik): 2021-06
* [Setting Up Your Development Environment for React: A Comprehensive Guide](https://medium.com/@trilogicalshelp/setting-up-your-development-environment-for-react-a-comprehensive-guide-903293512fab): 2023-10

# Environment
* [Deno](./Deno/Deno.md): Deno is a JavaScript, TypeScript, and WebAssembly runtime with secure defaults and a great developer experience.
* [jsdom](https://github.com/jsdom/jsdom): jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, **for use with Node.js**. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.
* [nvm](./nvm/nvm.md): Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions.

# Package, Project
* [Babel](./Babel/Babel.md): Babel is a JavaScript compiler.
* [Browserify](https://browserify.org/): Browserify lets you `require('modules')` in the browser by bundling up all of your dependencies.
* [Google Closure Compiler](https://github.com/google/closure-compiler): The Closure Compiler is a tool for making JavaScript download and run faster. It is a true compiler for JavaScript. Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what's left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.
* [npm](./npm/npm.md): JavaScript Package Manager, Registry & Website.
* [nodemon](./nodemon/nodemon.md): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [Parcel](./Parcel/Parcel.md): Parcel is a zero configuration build tool for the web.
* [Prepack](https://prepack.io/): A JavaScript bundle optimizer. This repository was archived by the owner on Feb 12, 2022. It is now read-only.
* [RequireJS](https://requirejs.org/): RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.
* [SWC(Speedy Web Compiler)](./SWC/SWC.md): SWC (stands for Speedy Web Compiler) is a super-fast TypeScript / JavaScript compiler written in Rust. It's a library for Rust and JavaScript at the same time.
* [webpack](./webpack/webpack.md): Webpack is a module bundler.
* [yarn](https://yarnpkg.com/)

# Documentation
* [JSDoc](./JSDoc/JSDoc.md): An API documentation generator for JavaScript.
* [TSDoc](./TSDoc/TSDoc.md): TSDoc is a proposal to standardize the doc comments used in TypeScript code.
* [tsoa](https://tsoa-community.github.io/docs/): OpenAPI-compliant Web APIs using TypeScript and Node

# Linter, Formatter, Type Checker
* [ESLint](./ESLint/ESLint.md): ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
* JSLint
* JSHint
* [Prettier](./Prettier/Prettier.md)
* [TSLint](https://github.com/palantir/tslint): TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters. - [Roadmap: TSLint -> ESLint #4534](https://github.com/palantir/tslint/issues/4534)

# Testing

Unit Test:
* [Chai](./Chai/Chai.md): Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [Jasmine](https://Jasmine.github.io): Jasmine is a framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It runs in browsers and in Node.js. And it has a clean, obvious syntax so that you can easily write tests. - [JavaScript Testing with Jasmine](https://www.oreilly.com/library/view/javascript-testing-with/9781449356729/) O'Reilly: 2013.
* [Jest](./Jest/Jest.md): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Mocha](./Mocha/Mocha.md): Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
* [Tape](https://github.com/substack/tape): TAP-producing test harness for node and browsers.
  * [Test Anything Protocol](https://testanything.org/): TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness. It decouples the reporting of errors from the presentation of the reports.
* [Testcontainers for Node.js](https://node.testcontainers.org/): Testcontainers is a library that supports tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.
* [Vitest](./Vite/Vitest/Vitest.md): Next generation testing framework powered by [Vite](./Vite/Vite.md).

End-to-End Test:
* [Cypress](./Cypress/Cypress.md): Cypress is a next generation front end testing tool built for the modern web.
* [Playwright](./Playwright/Playwright.md): Playwright enables reliable end-to-end testing for modern web apps.
* [Puppeteer](./Puppeteer/Puppeteer.md): Puppeteer is a JavaScript library which provides a high-level API to control Chrome or Firefox over the DevTools Protocol or WebDriver BiDi. Puppeteer runs in the headless (no visible UI) by default.

## See Also
* [What Is the Best Unit Testing Framework for JavaScript?](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/)
* [Testing Library](https://testing-library.com/): Simple and complete testing utilities that encourage good testing practices.

# Logging
* [log4js](https://github.com/log4js-node/log4js-node)
* [Winston](https://github.com/winstonjs/winston)
* [Pino](https://github.com/pinojs/pino)

## See Also
* [The 10 Best Node.js Logging Libraries](https://hackernoon.com/the-10-best-nodejs-logging-libraries)

# Data Engineering
* [redis/node-redis](https://github.com/redis/node-redis): Redis Node.js client.
* [TypeORM](./TypeORM/TypeORM.md): ORM for TypeScript and JavaScript. Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.

# Misc
* [Axios](./Axios/Axios.md): Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
* [classnames](https://github.com/JedWatson/classnames): A simple javascript utility for conditionally joining classNames together.
* [cssnano](https://github.com/cssnano/cssnano): cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.
* [Lodash](./Lodash/Lodash.md): A modern JavaScript utility library delivering modularity, performance & extras.
* [Sass](./Sass/Sass.md): Sass is a stylesheet language that’s compiled to CSS.
* [UI5 Web Components](./UI5%20Web%20Components/UI5%20Web%20Components.md)
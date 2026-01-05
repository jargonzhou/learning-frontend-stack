# Jest
* https://jestjs.io/
* https://github.com/jestjs/jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
>
> It works with projects using: [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/), [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/) and more!

```shell
# 安装
npm install --save-dev jest
npm install --save-dev ts-jest
npm install --save-dev @jest/globals

# 生成配置文件
npx jest --init
npx ts-jest config:init

# 配置参考 ESM Support: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
```

# Concepts
- matchers
- test asynchronous code: promise, `async`/`await`, callback, `.resolves`/`.rejects`
- setup and teardown: 
- mock functions
- Jest Platform

## Jest Platform
* https://jestjs.io/docs/jest-platform

You can cherry pick specific features of Jest and use them as standalone packages.
- jest-changed-files
- jest-diff
- jest-docblock
- jest-get-type
- jest-validate
- jest-worker
- pretty-format

## Guides

- Snapshot Testing/测试的快照: Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
  - ex `react-test-renderer`
  - `toMatchSnapshot`, `.snap`
  - `toMatchInlineSnapshot`
- An Async Example
- Timer Mocks
- Manual Mocks
- ES6 Class Mocks
- Bypassing module mocks
- ECMAScript Modules
- Using with webpack
- Using with puppeteer
- Using with MongoDB
- Using with DynamoDB
- DOM Manipulation
- Watch Plugins
- Migrating to Jest
- Troubleshooting
- Architecture: [Building a JavaScript Testing Framework](https://cpojer.net/posts/building-a-javascript-testing-framework)

## Framework Guides

- Testing React Apps
  - Create React App + `react-test-renderer`
  - `jest` + `babel-jest` `@babel/preset-env` `@babel/preset-react` + `react-test-renderer`
  - DOM testing: `@testing-library/react`, Enzyme, `react-dom/test-utils`
    - [react-dom/test-utils Deprecation Warnings](https://react.dev/warnings/react-dom-test-utils) - v19.2.
- Testing React Native Apps
- Testing Web Frameworks

# Related Projects
## ts-jest
* https://kulshekhar.github.io/ts-jest/
* https://github.com/kulshekhar/ts-jest

> A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

## jsdom-worker
* https://github.com/developit/jsdom-worker

> This is an experimental implementation of the Web Worker API (specifically Dedicated Worker) for JSDOM.
>
> It does not currently do any real threading, rather it implements the Worker interface but all work is done in the current thread. jsdom-worker runs wherever JSDOM runs, and does not require Node.
>
> It supports both "inline" (created via Blob) and standard (loaded via URL) workers.

# See Also
* [Jest Testing: A Helpful, Introductory Tutorial](https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/)
* [jest-community/vscode-jest](https://github.com/jest-community/vscode-jest): The optimal flow for Jest based testing in **VS Code**. - Orta

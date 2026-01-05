# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Setup

```shell
$ npm create vite@latest ex-vite-upandrunning
Need to install the following packages:
create-vite@8.2.0
Ok to proceed? (y)


> npx
> create-vite ex-vite-upandrunning

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript + React Compiler
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in ...\ex-vite-upandrunning...
│
◇  Installing dependencies with npm...

added 158 packages, and audited 159 packages in 1m

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> ex-vite-upandrunning@0.0.0 dev
> vite


  VITE v7.3.0  ready in 1114 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Testing

Jest
```shell
$ npm install --save-dev jest
$ npm install --save-dev @jest/globals
$ npm install --save-dev jest-environment-jsdom
$ npm init jest
...
> create-jest

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

$ cat jest.config.mjs | grep -v "//" | grep '\S'
/**
 * For a detailed explanation regarding each configuration property, visit:
 */
/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true,
  },
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node"
  ],
  testEnvironment: "jsdom",
};
export default config;
```

Babel
```shell
$ npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react
$ touch babel.config.cjs
$ cat babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

React Testing Library
```shell
$ npm install --save-dev @testing-library/react @testing-library/dom @testing-library/jest-dom
```

# Info

Examples in
- React: Up & Running, 2nd Edition
- Learning React, 2nd Edition


## Dependencies
- react-icons
- classnames
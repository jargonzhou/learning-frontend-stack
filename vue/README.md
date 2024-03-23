# Vue

- https://vuejs.org/

starter:

```shell
✗ npm create vue@latest
Debugger attached.
Need to install the following packages:
  create-vue@3.10.2
Ok to proceed? (y) 
Debugger attached.

Vue.js - The Progressive JavaScript Framework

✔ Project name: … vue-project
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ...vue-project...

Done. Now run:

  cd vue-project
  npm install
  npm run dev
```

```shell
✗ tree -L 2
.
├── README.md
├── index.html
├── jsconfig.json
├── node_modules
│   ├── @babel
│   ├── @esbuild
│   ├── @jridgewell
│   ├── @rollup
│   ├── @types
│   ├── @vitejs
│   ├── @vue
│   ├── csstype
│   ├── entities
│   ├── esbuild
│   ├── estree-walker
│   ├── fsevents
│   ├── magic-string
│   ├── nanoid
│   ├── picocolors
│   ├── postcss
│   ├── rollup
│   ├── source-map-js
│   ├── vite
│   └── vue
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   └── main.js
└── vite.config.js

✗ tree src
src
├── App.vue
├── assets
│   ├── base.css
│   ├── logo.svg
│   └── main.css
├── components
│   ├── HelloWorld.vue
│   ├── TheWelcome.vue
│   ├── WelcomeItem.vue
│   └── icons
│       ├── IconCommunity.vue
│       ├── IconDocumentation.vue
│       ├── IconEcosystem.vue
│       ├── IconSupport.vue
│       └── IconTooling.vue
└── main.js
```
# Vite
* https://vitejs.dev/

> Next Generation Frontend Tooling
>
> - 💡 Instant Server Start
> - ⚡️ Lightning Fast HMR
> - 🛠️ Rich Features
> - 📦 Optimized Build
> - 🔩 Universal Plugin Interface
> - 🔑 Fully Typed APIs
>
> Vite (French word for "quick", pronounced /vit/, like "veet") is **a new breed of frontend build tooling that significantly improves the frontend development experience**. It consists of two major parts:
>
> - A **dev server** that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
>
> - A **build command** that bundles your code with [Rollup](Hot Module Replacement (HMR)), pre-configured to output highly optimized static assets for production.
>
> In addition, Vite is highly extensible via its **Plugin API** and **JavaScript API** with full typing support.


# Scaffolding

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

# Features
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## Hot Module Replacement (HMR)

# Env Variables and Modes
* [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)
* [dotenv-expand](https://github.com/motdotla/dotenv-expand): Variable expansion for `dotenv`. Expand variables already on your machine for use in your `.env` file.

# Plugins
* https://vitejs.dev/plugins/
* [Rollup's Plugin](https://rollupjs.org/plugin-development/)

# vite-express
* [vite-express](https://github.com/szymmis/vite-express)

# See Also
* [vitejs/awesome-vite](https://github.com/vitejs/awesome-vite): A curated list of awesome things related to Vite.js

# Vitest
* https://vitest.dev

> Next generation testing framework powered by Vite.

# Features

- [Vite](https://vitejs.dev/)'s config, transformers, resolvers, and plugins. Use the same setup from your app!
- [Jest Snapshot](https://jestjs.io/docs/snapshot-testing)
- [Chai](https://www.chaijs.com/) built-in for assertions, with [Jest expect](https://jestjs.io/docs/expect) compatible APIs
- [Smart & instant watch mode](https://vitest.dev/guide/features.html#watch-mode), like HMR for tests!
- [Native code coverage](https://vitest.dev/guide/features.html#coverage) via [`v8`](https://v8.dev/blog/javascript-code-coverage) or [`istanbul`](https://istanbul.js.org/).
- [Tinyspy](https://github.com/tinylibs/tinyspy) built-in for mocking, stubbing, and spies.
- [JSDOM](https://github.com/jsdom/jsdom) and [happy-dom](https://github.com/capricorn86/happy-dom) for DOM and browser API mocking
- [Browser Mode](https://vitest.dev/guide/browser/) for running component tests in the browser
- Components testing ([Vue](https://github.com/vitest-tests/browser-examples/tree/main/examples/vue), [React](https://github.com/vitest-tests/browser-examples/tree/main/examples/react), [Svelte](https://github.com/vitest-tests/browser-examples/tree/main/examples/svelte), [Lit](https://github.com/vitest-dev/vitest/blob/main/examples/lit), [Marko](https://github.com/marko-js/examples/tree/master/examples/library-ts))
- Benchmarking support with [Tinybench](https://github.com/tinylibs/tinybench)
- [Projects](https://vitest.dev/guide/projects) support
- [expect-type](https://github.com/mmkal/expect-type) for type-level testing
- ESM first, top level await
- Out-of-box TypeScript / JSX support
- Filtering, timeouts, concurrent for suite and tests
- Sharding support
- Reporting Uncaught Errors
- Run your tests in the browser natively


# Guides

## Browser Mode
* https://vitest.dev/guide/browser/why.html

## CLI
* https://vitest.dev/guide/cli.html

ex: [.vscode/launch.json](../ex-vite-ts/.vscode/launch.json) `args`

# API

# Configuration: `vitest.config.ts`
* https://vitest.dev/config/



# See Also
* [vitest-dev/vscode](https://github.com/vitest-dev/vscode): **VS Code extension** for Vitest.
* [The one thing vitest has better support than jest](https://marabesi.com/2025/01/30/the-one-thing-vitest-has-better-support-than-jest.html): Web Workers. - 2025-01-30
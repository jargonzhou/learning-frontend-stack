# TypeScript
* https://www.typescriptlang.org/

Documentation
- **Get Started**: Quick introductions based on your background or preference.
- **Handbook/手册**: A great first read for your daily TS work.
- **Reference/指南**: Deep dive reference materials.
- **Modules Reference/模块指南**: How TypeScript models JavaScript modules.
- **Tutorials/教程**: Using TypeScript in several environments.
- **Declaration Files/声明文件**: Learn how to write declaration files to describe existing JavaScript. Important for DefinitelyTyped contributions.
- **JavaScript**: How to use TypeScript-powered JavaScript tooling.
- **Project Configuration/项目配置**: Compiler configuration reference.
- **Cheat Sheets**: Downloadable syntax reference pages for different parts of everyday TypeScript code.

# Concepts
* [TypeScript Programming Language](./ts-language.md)

## Types
* [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Modules
* https://www.typescriptlang.org/docs/handbook/modules/introduction.html


# env: Node.js

* Natively: `node --experimental-strip-types *.ts`.
* Runner: `ts-node`, [`tsx`](https://tsx.is/).
* Transpilation: TypeScript compiler `tsc`.

# Project Configuration
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## `tsconfig.json`
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
* [tsconfig-schema.json](./tsconfig-schema.json)

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies **the root files** and **the compiler options required to compile the project**.

JavaScript projects can use a `jsconfig.json` file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

## `tsc`
* https://www.typescriptlang.org/docs/handbook/compiler-options.html

## Project References
* https://www.typescriptlang.org/docs/handbook/project-references.html

## Integrating with Build Tools
* https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html

- Babel
- Browserify
- Grunt
- Gulp
- Jspm
- MSBuild
- NuGet
- Rollup
- Svelte Compiler
- Vite
- Webpack

# Tools

* TSC
* TSX

* [tslib](https://github.com/Microsoft/tslib)
> Runtime library for TypeScript helpers. 

* [TSDoc](https://tsdoc.org/)
> TSDoc is a proposal to standardize the doc comments used in [TypeScript](http://www.typescriptlang.org/) code, so that different tools can extract content without getting confused by each other's markup.

* [TypeDoc](https://typedoc.org/)
> TypeDoc converts comments in TypeScript source code into rendered HTML documentation or a JSON model. It is extensible and supports a variety of configurations. Available as a CLI or Node module.
```bash
# Install
npm install --save-dev typedoc
# Execute typedoc on your project
npx typedoc src/index.ts
npx typedoc --entryPointStrategy expand ./src
```

* [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc)

# Examples
* [example-ts-nodejs](./example-ts-nodejs/README.md): TypeScript in Node.js
* [example-express-swagger](./example-express-swagger/README.md): Express with Swaggar

# See Also
* [awesome-typescript](https://github.com/dzharii/awesome-typescript)
* [Programming TypeScript](../../books/ProgrammingTypeScript.md)

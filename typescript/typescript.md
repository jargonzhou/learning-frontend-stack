# TypeScript
* https://www.typescriptlang.org/
* [awesome-typescript](https://github.com/dzharii/awesome-typescript)

books:
* Boris Cherny. **Programming TypeScript**. O.Reilly, 2020.
* [TypeScript Deep Dive](https://github.com/basarat/typescript-book)


## Concepts
* [TypeScript Programming Language](./ts-language.md)

### Types
* [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Modules
* https://www.typescriptlang.org/docs/handbook/modules/introduction.html

### `tsconfig.json`
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### `tsc`
* https://www.typescriptlang.org/docs/handbook/compiler-options.html


## env: Node.js

* Natively: `node --experimental-strip-types *.ts`.
* Runner: `ts-node`, [`tsx`](https://tsx.is/).
* Transpilation: TypeScript compiler `tsc`.

## Tools

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

## Examples
* [example-ts-nodejs](./example-ts-nodejs/): TypeScript in Node.js
* [example-express-swagger](.//README.md): Express with Swaggar
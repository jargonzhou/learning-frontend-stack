# Programming TypeScript

# 1. Introduction

type safety

# 2. TypeScript: A 10_000 Foot View

tools
- VS Code
- TSC: Node.js
- npm: `typescript`, `tslint`, `@types/node`, `ts-node`
- tsconfig.json
- tslint.json

# 3. All About Types

<!--
Scoped Declarations
-->

```ts
unknown                      // cannot use until refine it by checking what it is
  any                        // represent any value
    void                     // the return type of a function that doesnot explicitly return anything
      undefined              // mean something hasnot beed defined yet - JavaScript
    null                     // mean absense of a value - JavaScript
    number                   // integers, floats, positives, negatives, Infinity, NaN, ...
      Number enums           // map from string to number
    bigint                   // bigger than number (2^53)
    boolean                  // true, false
    string                   // ''
      String enums           // map from string to string
    symbol                   // ES2015, Symbol('x'), alternative to string keys in objects and maps, only equal to itself.
      unique symbol          // display as 'typeof varName'
    Object types             // structurally typed, object literal syntax
      object                 // narrower than `any`, but not by much
      Object
      Array types            // []: `any[]`
        Tuple types          // subtypes of array: ex [string, string, number]
      Function types
      Constructor types
never                        // bottom type: the type of a function that never returns at all: throw exceptions or run forever

Type literal                 // 类型字面量
```

object literal syntax
```ts
let a: {
  b: number
  c?: string                 // optional: maybe `undefined`
  [key: number]: boolean     // index signature: any number of `number` typed properties that are `boolean`s
  readonly firstName: string // readonly modifier
}
```

Is the value a valid object?
```ts
let b: {}               // empty object type
let c: Object
let d: object
```

| `Value`           | `{}` | `object` | `Object` |
| :---------------- | :--- | :------- | :------- |
| `{}`              | Yes  | Yes      | Yes      |
| `['a']`           | Yes  | Yes      | Yes      |
| `function(){}`    | Yes  | Yes      | Yes      |
| `new String('a')` | Yes  | Yes      | Yes      |
| `'a'`             | Yes  | No       | Yes      |
| `1`               | Yes  | No       | Yes      |
| `Symbol('a')`     | Yes  | No       | Yes      |
| `null`            | No   | No       | No       |
| `undefined`       | No   | No       | No       |


type operators
```javascript
typeof
instanceof
```

type aliases:
- `type Age = number`, `type Color = 'red'`
- type aliases are block-scoped.

unions, intersections
```ts
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog        // Cat, Dog, Both
type CatAndDog = Cat & Dog             // must have all properties
```

readonly arrays, tuples
```ts
readonly string[]
ReadOnlyArray<string>
ReadOnly<string[]>

readonly [number, string]
ReadOnly<[number, string]>
```

# 4. Functions

declare functions
```ts
// Named function/命名函数
function greet(name: string) {
  return 'hello ' + name
}
// Function expression/函数表达式
let greet2 = function (name: string) {
  return 'hello ' + name
}
// Arrow function expression/箭头函数表达式
let greet3 = (name: string) => {
  return 'hello ' + name
}
// Shorthand arrow function expression/箭头函数表达式缩写
let greet4 = (name: string) =>
  'hello ' + name
// Function constructor/函数构造器
let greet5 = new Function('name', 'return "hello " + name')
```

parameters
- optional parameters: `?:`
- default parameters: `=`
- reset parameters: `...`
  - JavaScript `arguments`

invoke functions
- `()`
- `apply`: binds a value to `this` in function, spreads its second arguments over parameters 
- `call`: same as `apply`, but apply arguments in order instead of spreading
- `bind`: same as `call`, but return a new function
```ts
function add(a: number, b: number): number {
  return a + b
}

add(10, 20)
add.apply(null, [10, 20])
add.call(null, 10, 20)
add.bind(null, 10, 20)()
```

**generator functions/生成器函数**: `function*`, `yield`
```ts
function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}
let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
fibonacciGenerator.next()
fibonacciGenerator.next()
```

**Iterable/可迭代的**: Any object that contains a property called `Symbol.iterator`, whose value is a function that returns an iterator.

**Iterator/迭代器**: Any object that defines a method called `next`, which returns an object with the properties `value` and `done`.

```ts
// let numbers: {
//     [Symbol.iterator](): Generator<number, void, unknown>;
// }
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

// Iterate over an iterator with for-of
for (let a of numbers) {
}
// Spread an iterator
let allNumbers = [...numbers];
// Destructure an iterator
let [one, two, ...rest] = numbers;
```

**call signature/调用签名**: function's type

contextual typing/上下文类型

overloaded function types

polymorphism/多态
- generics/泛型
- generic type inference
- generic type aliases
- bounded polymorphism
- generic type defaults

# 5. Classes and Interfaces

classes
- inheritance
- `super`
- `this` as a return type
- classes are **structually typed/结构化类型的**
  - a class is compatible with any other type that shares its shape: except classes with `private` or `protected` fields.
- classes declare bothe values and types
  - types and values are namespace seperately in TypeScript
  - classes and enums: generate both a type and a value
    - instance type/实例类型
    - constructor type/构造器类型: `new` 
- simulate final classes

interfaces
- declaration merging/声明合并
- implementations: `implements`
  - vs extend abstract classes: interfaces only exist at compile time
- interfaces can declare instance properties: cannot declare visibility modifiers, cannot use `static`, can mark as `readonly`

difference between type aliases and interfaces
- type aliases: `type`, intersection types `&`, interfaces: `extends`
- type aliases' righthand side can be any type, including a **type expression/类型表达式**, interfaces' righthand side must be a **shape/形状**
- when extend an interface, the interface extended from must be assignable to the extension interface.
- multiple interfaces with the same name in the same scope are automatically merged: **declaration merging/声明合并**.

polymorphism: generic type parameters in classes and interface, including defaults and bounds.

mixins/混入
- ex [EZDebug.ts](../language/TypeScript/example-ts-nodejs/src/classes_interfaces/EZDebug.ts)

decorators/装饰器: `experimentalDecorators`
- ex [decorators.ts](../language/TypeScript/example-ts-nodejs/src/classes_interfaces/decorators.ts)

design patterns
- factory pattern
- builder pattern

# 6. Advanced Types

relationships between types
- subtypes and supertypes
- variance
- assignability
- **type widening/类型宽化**
  - the `const` type: type assertion `as const`
  - excess property checking
- refinement: flow-based type inference
  - discriminated union types

totality: exhaustiveness checking

advanced object types
- **type operators/类型操作符** for object types
  - union, intersection: `|`, `&`
  - keying-in: to any shape(object, class constructor, class instance), any array
  - `keyof`: get all of an object's keys as a union of string literal types
- the `Record` type: describe an object as a map fron something to something
- mapped types
- companion object pattern


advanced function types: ex [functions.test.ts](../language/TypeScript/example-ts-nodejs/src/functions/functions.test.ts)
- improving type inference for tuples
- user defined type guards

**conditional types/条件类型**: ex [types.test.ts](../language/TypeScript/example-ts-nodejs/src/types/types.test.ts)
- distributive conditionals: wehn you use a conditional type, TypeScript will distribute union types over the conditional's branches.

escape hatches: 
- **type assertions/类型断言**
- **nonnull assertions/非空断言**
- **definite assignment assertions/确定赋值断言**

simulating **nominal types/命名的类型**
- type branding: `& { readonly brand: unique symbol }`

safetly extending the prototype: `prototype`

# 7. Handling Errors

ex [errors.test.ts](../language/TypeScript/example-ts-nodejs/src/errors/errors.test.ts)
- returning null
- throwing exceptions: `try catch`, `throw`
- returning exceptions
- the Option type

# 8. Asynchronous Programming, Concurrency, and Parallelism

- JavaScript's event loop: 
  - main thread
    - whenever call stack is empty, platform check main thread's event queue for pending tasks.
  - native async APIs: `XMLHTTPRequest`, `setTimeout()`, `readFile()`, ...
  - event queue: 
    - each thread has its own queue
    - task: put to queue when async operation done. include call metainfo and a reference to a callback function from main thread.
- callbacks
- promises
- `async`, `await`
- async streams
  - Node.js `EventEmitter`
  - RxJS
  - MostJS
  - xstream
- typesafe multithreading

# 9. Frontend and Backend Frameworks

Frontend frameworks
- React
- Angular

Typesafe API
- typesafe protocols: in 'Typesafe Multithreading - In the Browser: With Web Workers'
- RESTfull APIs: Swagger
- GraphQL: Apollo, Relay
- RPC: gRPC, Apache Thrift

Backend Frameworks
- PostgreSQL, MongoDB, ...
- ORM: TypeORM

# 10. Namespaces.Modules

modules
- how TSC resolve modules
- how build system (Webpack, Gulp, etc) resolve modules
- how modules are actually loaded into application at runtime: `<script />`, SystemJS, ...

TypeScript consume and export code in a module:
- global declaration/全局声明
- ES2015 `import`s and `export`s
- backward-compatible `import`s from CommonJS modules

TSC's build system: compile moduels for environments
- globals
- ES2015
- CommonJS
- AMD
- SystemJS
- UMD

ES2015 `import`, `export`
- default exports/默认导出
- wildcard import/通配符导入: `*`
- reexport/重新导出
- TypeScript: export types, interfaces, values
  - `export type`
- dynamic imports/动态导入: `let xxx = await import('xxx')`
  - use `import` as a statement or a function
  - TypeScript supports dynamic imports in `esnext` module mode only.
- using CommonJS and AMD code
  - `import {Name} form '...'`
  - `import * as fs from 'fs'`: CommonJS default exports
  - `import fs from 'fs'`: `{"esModuleInterop": true}`
- **module mode/模块模式** vs. **script mode/脚本模式**
  - decision heuristic: file conaints any `import`s or `export`s
  - script mode: any top-level variables declared will be available to other files in project without explicit imports, the **global exports/全局导出**; can safely consume global exports from third-party UMD modules without explicitly import them first.

**namespace/命名空间**: not the preferred way to encapsulate code
- collisions between identically named exports are not allowed: use overloaded function declarations.
- namespaces always compile to global variables.

**declaration merging/声明合并**
- merging values and types
- merging multiple namesapce into one
- merging multiple interfaces into one

| From\To          | Value | Class | Enum | Function | Types alias | Interface | Namespace | Module |
| :--------------- | :---- | :---- | :--- | :------- | :---------- | :-------- | :-------- | :----- |
| Value            | No    | No    | No   | No       | Yes         | Yes       | No        | —      |
| Class            | —     | No    | No   | No       | No          | Yes       | Yes       | —      |
| Enum             | —     | —     | Yes  | No       | No          | No        | Yes       | —      |
| Function         | —     | —     | —    | No       | Yes         | Yes       | Yes       | —      |
| Type       alias | —     | —     | —    | —        | No          | No        | Yes       | —      |
| Interface        | —     | —     | —    | —        | —           | Yes       | Yes       | —      |
| Namespace        | —     | —     | —    | —        | —           | —         | Yes       | —      |
| Module           | —     | —     | —    | —        | —           | —         | —         | Yes    |

`moduleResolution`: 
- `node`: always use this mode.
- `classic`: should never use this mode.

# 11. Interoperating with JavaScript

type declarations/类型声明
- a type declaration is a file with extension `.d.ts`: attach TypeScript types to JavaScript code.
- can only contain types, and cannot contain values.
- cannot define values, can use `declare` to declare that there exists a value defined somewhere in JavaScript.
- only declare types for things that are visible to consumers.
- ex RxJS
- a type desclration has to live in a **script mode** `.ts` or `.d.ts` file.
  - top-level values in a type declaration file need to use `declare`,
  - top-level types and interfaces do not.
- ambient variable declarations: tell TypeScript about a global variable that can be used in any `.ts` or `.d.ts` file in project without explicitly importing it first.
  - `declare let`
- ambient type declarations: the declaration has to live in a script mode `.ts` or `.d.ts` file, it will be available globally to other files in project without exilicpt import.
- ambient module declarations: declare some type for a JavaScript module to use it safely.
  - `declare module`

gradually migrating from JavaScript to TypeScript
- 1. add TSC: `"allowJs": true`
- 2a. (optional) enable typechecking for JavaScript: `"checkJs": true`, or enable checking a file at a time with `// @ts-check`
- 2b. (optional) add JSDoc annotations
- 3. rename files to `.ts`
- 4. make it strict: `"allowJs": false, "checkJs": false`

type lookup for JavaScript
- import a JavaScript file from a TypeScript file: local type loopup algorithm
  - search sibling `.d.ts` file with the same name as `.js` file
  - otherwise, if `"allowJs": true, "checkJs": true`, infer `.js` file's type
  - otherwise, treat the whole module as `any`.
- import a third-party JavaScript module
  - search a local type declaration for the module: `declare module`
  - otherwise, look at the module's `package.json` `types` or `typings` pointed `.d.ts` file
  - otherwise, look for `node_modules/@types` directory for type declarations for the module
  - otherwise, use local type loopup algorithm

using third-party JavaScript
- JavaScript That Comes with Type Declarations
```shell
npm install rxjs
npm install ava
npm install @angular/cli
```
- JavaScript That Has Type Declarations on DefinitelyTyped
```shell
npm install lodash --save
npm install @types/lodash --save-dev
```
- JavaScript That Doesn’t Have Type Declarations on DefinitelyTyped
  - Whitelist the specific import by adding a `// @ts-ignore` directive above your untyped import.
  - Whitelist all usages of this module by creating an empty type declaration file and stubbing out the module: `types.d.ts` `declare module 'xxx'`
  - Create an ambient module declaration: `types.d.ts` `declare module 'xxx' { ... }`
  - Create a type declaration and contribute it back to NPM.

# 12. Building and Running TypeScript

building TypeScript project
- TSC generated artifacts
  - `.js`: JavaScript
  - `.js.map`: source maps. link each piece of generated JavaScript back to the specific line and column of the TypeScript file that it was generated from.
  - `.d.ts`: type declarations. let other TypeScript projects take advantage of generated types.
  - `.d.ts.map`: declaration maps. speed up compilation times for TypeScript projects.
- TSC environment settings
  - `target`: set the JavaScript version you want to transpile to: `es5`, `es2015`, ...
  - `module`: set the module system you want to target: `es2015` modules, `commonjs` modules, `systemjs` modules, ...
  - `lib`: tell TypeScript which JavaScript features are available(natively or via a polyfill) in the target environment: `es5` features, `es2015` features, `dom`, ...
    - polyfill
      - [core-js](https://www.npmjs.com/package/core-js): Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2025: promises, symbols, collections, iterators, typed arrays, many other features, ECMAScript proposals, some cross-platform WHATWG / W3C features and proposals like URL. You can load only required features or use it without global namespace pollution.
      - [@babel/polyfill](https://babeljs.io/docs/babel-polyfill): Babel includes a polyfill that includes a custom regenerator runtime and core-js. As of Babel 7.4.0, this package has been deprecated in favor of directly including `core-js/stable` (to polyfill ECMAScript features)
- enableing source maps
- project references: `references`

run TypeScript on the server
- Node.js environment: `"target": "es2015", "modules": "commonjs"`

run TypeScript in the browser
- pick a module system to compile to
  - `umd`: for publishing to NPM
  - without publishing to NPM: specific module bundler
- setup build pipeline to compile TypeScript to JavaScript: build tools
  - Webpack: ts-loader
  - Browserify: tsify
  - Babel: @babel/preset-typescript
  - Gulp: gulp-typescript
  - Grunt: grunt-ts

publishing TypeScript code to 
- `tsconfig.json`
```json
{
  "compilerOptions": {
    "declaration": true,
    "module": "umd",
    "sourceMaps": true,
    "target": "es5"
  }
}
```
- `.npmignore`
```
# .npmignore
*.ts # Ignore .ts files
!*.d.ts # Allow .d.ts files

# .gitignore
*.d.ts # Ignore .d.ts files
*.js # Ignore .js files
```
- `package.json`
```json
{
  "name": "my-awesome-typescript-project",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "prepublishOnly": "tsc -d"
  }
}
```

triple-slash `///` directives are specially formatted TypeScript comments that serve as instructions to TSC.

# 13. Conclusion
# A. Type Operators

| Type operator                  | Syntax                 | Use it on                                             |
| :----------------------------- | :--------------------- | :---------------------------------------------------- |
| Type query                     | `typeof`, `instanceof` | Any type                                              |
| Keys                           | `keyof`                | Object types                                          |
| Property lookup                | `O[K]`                 | Object types                                          |
| Mapped type                    | `[K in O]`             | Object types                                          |
| Modifier addition              | `+`                    | Object types                                          |
| Modifier subtraction           | `-`                    | Object types                                          |
| Read-only modifier             | `readonly`             | Object types, array types, tuple types                |
| Optional modifier              | `?`                    | Object types, tuple types, function parameter types   |
| Conditional type               | `?`                    | Generic types, type aliases, function parameter types |
| Nonnull assertion              | `!`                    | Nullable types                                        |
| Generic type parameter default | `=`                    | Generic types                                         |
| Type assertion                 | `as`, `<>`             | Any type                                              |
| Type guard                     | `is`                   | Function return types                                 |

# B. Type Utilities

see [es5.d.ts](https://github.com/Microsoft/TypeScript/blob/main/src/lib/es5.d.ts)

# C. Scoped Declarations

Does the declaration generate a type?

| Keyword       | Generates a type? | Generates a value? |
| :------------ | :---------------- | :----------------- |
| class         | Yes               | Yes                |
| const,let,var | No                | Yes                |
| enum          | Yes               | Yes                |
| function      | No                | Yes                |
| interface     | Yes               | No                 |
| namespace     | No                | Yes                |
| type          | Yes               | No                 |

Does It Merge?: see [declaration merging](#10-namespacesmodules)

# D. Recipes for Writing Declaration Files for Third-Party JavaScript Modules
# E. Triple-Slash Directives

put your directives at the top of your file, before any code: `///` followed by an XML tag
```ts
/// <directive attr="value" />
```

example
```ts
// amd-module: Declare export names when compiling to AMD modules 
/// <amd-module name="MyComponent" />

// lib: Declare which of TypeScript’s built-in libs your type declarations depend on
/// <reference lib="dom" /> 

// path: Declare which TypeScript files your module depends on 
/// <reference path="./path.ts" />

// type: Declare which type declaration files your module depends on 
/// <reference types="./path.d.ts" />
```

# F. TSC Compiler Flags for Safety
# G. TSX
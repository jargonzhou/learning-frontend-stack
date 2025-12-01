# TypeScript
* https://www.typescriptlang.org/
* https://github.com/microsoft/TypeScript
* https://www.typescriptlang.org/play/

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

# Handbook/手册
* https://www.typescriptlang.org/docs/handbook/intro.html

## The Basics

- Static type-checking
- Non-exception Failures
- Types for Tooling
- `tsc`, the TypeScript compiler
- Emitting with Errors
- Explicit Types
- Erased Types
- Downleveling
- Strictness
- `noImplicitAny`
- `strictNullChecks`

## Everyday Types

- The primitives: `string`, `number`, `boolean`
- Arrays
- `any`
  - `noImplicitAny`
- Type Annotations on Variables: `: Type` in `const`/`var`/`let`
- Functions
  - Parameter Type Annotations
  - Return Type Annotations
  - Anonymous Functions
- Object Types: `{ }`, refer to any JavaScript value with properties
  - Optional Properties: `?: Type`
- Union Types: `Type1 | Type2`
  - Definint a Union Type
  - Working with Union Types
- Type Aliases: `type Name = ...`
- Interfaces: `interface`
  - Differences Between Type Aliases and Interfaces
- **Type Assertions/类型断言**: `as Type`
- **Literal Types/字面量类型**: specific strings and numbers in type positions
  - Literal Inference
- `null`, `undefined`
  - `strictNullChecks`
  - Non-null Assertion Operator(Postfix `!`)
- Enums
- Less Common Primitives
  - `bigint`: `BigInt`
  - `symbol`: `Symbol`

## Narrowing/缩小/收窄

TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called **type guards/类型守卫**) and assignments, and the process of *refining/细化* types to more specific types than declared is called **narrowing**.

- `typeof` type guard
- **truthinesss narrowing/真值窄化**: type `boolean`, condition operators `&&`, `||`, `!`, `if`/`while` statements
  - **equality narrowing/相等性窄化**: `switch` statements, equality check operators `===`, `!==`, `==`, `!=`
  - `in` operator narrowing: determine if an object or its prototype chain has a property with a name, ex `"value" in x`
  - `instanceof` narrowing: check whether or not a value is an instance of another value.
    - JavaScript: `x instance Foo` checkes whether the prototype chain of `x` contains `Foo.prototype`.
  - **assignment/赋值**: look at the right side of the assignment and narrows the left side appropriately.
  - **control flow analysis/控制流分析**: use control flow analyssi to narrow types when encounting type guards and assignments
  - **type predicates/类型谓词**: `parameterName is Type` as function return type
    - `this`-based type guard: `this is Type` as return type of methods in classes and interfaces
  - **assertion function/断言函数**
    - assertion signatures: `asserts <condition>` as function return type
      - ex: `asserts parameterName`, `asserts parameter is Type`
- **discriminated unions/可区分的并**: every type in a union contains a common property with literal types
- `never` type: represent a state which shouldnot exist
- **exhaustiveness checking/详尽性检查**: `swith default`, `never`

## More on Functions

- Function Type Expressions
- Call Signatures
- Construct Signatures
- Generic Function
  - Inference
  - Constraints
  - Working with Constrained Values
  - Specifying Type Arguments
  - Guidelines for Writing Good Generic Functions
- Optional Parameters
  - Optional Parameters in Callbacks
- Function Overloads
  - Overload Signatures and the Implementation Signature
  - Writing Good Overloads
- Declaring `this` in a Function
- Other Types to Know About
  - `void`
  - `object`
  - `unknown`
  - `never`
  - `Function`
- Rest Parameters and Arguments
  - Rest Parameters
  - Rest Arguments
- Parameter Destructuring
- Assignability of Functions
  - Return type `void`

## Object Types/对象类型

object types representations: anonymous, interface, type alias.

- **Property Modifiers/属性修饰符**: Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.
  - Optional Properties/可选属性
  - `readonly` Properties/只读属性
  - Index Signatures/索引签名: Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values. you can use an index signature to describe the types of possible values.
    - Only some types are allowed for index signature properties: `string`, `number`, `symbol`, template string patterns, and union types consisting only of these.
    - It is possible to support multiple types of indexers. Note that when using both `number` and `string` indexers, the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. 
```ts
interface StringArray {
  [index: number]: string;
}
```
- **Excess Property Chcks/过量属性检查**
- Extending Types/扩展类型
  - The `extends` keyword on an `interface` allows us to effectively copy members from other named types, and add whatever new members we want. 
  - **interfaces** can also extend from multiple types.
- **Intersection Types/交类型**: `Type1 & Type2`
- Interface Extension vs. Intersection
- Generic Object Types
  - The `Array` Type
  - The `ReadonlyArray` Type
  - Tuple Types
  - `readonly` Tuple Types

## Type Manipulation/类型操作

Creating Types from Types/从类型创建类型: express types in terms of other types
- **Generics/泛型**: types witch take parameters
  - Working with Generic Type Variables
  - Generic Types
  - Generic Classes
  - Generic Constraints
  - Using Type Parameters in Generic Constraints
  - Using Class Types in Generics
  - Generic Parameter Defaults
  - Variance Annotations: contravariant `in`, covariant `out`, invariant `in out`
- `keyof` Type Operator: takes an object type and produces a string or numeric literal union of its keys
- `typeof` Type Operator
  - JavaScript already has a `typeof` operator you can use in an *expression contex*t.
  - TypeScript adds a `typeof` operator you can use in a *type context* to refer to the type of a variable or property.
- **Indexed Access Types/索引的访问类型**: use `Type[IndexingType]` syntax to asccess a subset of a type/look up a specific property on another type
  - `IndexingType`: ex `"propertyName"`
  - the indexing type is itself a type, we can use unions, `keyof` or other types.
  - use `number` to get the type of an array's elements: `typeof MyArray[number]`
- **Conditional Types/条件类型**: types which act like if statement in the type system
  - `SomeType extends OtherType ? TrueType : FalseType;`: When the type on the left of the `extends` is **assignable** to the one on the right, then you’ll get the type in the first branch (the “true” branch); otherwise you’ll get the type in the latter branch (the “false” branch).
  - Conditional Type Constraints
  - Inferring Within Conditional Types: `infer`
  - Distributive Conditional Types: When conditional types act on a generic type, they become **distributive/分配的** when given a union type.
- **Mapped Types/映射的类型**: create types by mapping each properties in an existing type
  - build on the syntax for index signatures: `[key: string]: Type`.
  - a mapped type is a generic type which uses a union of `PropertyKey`s(create via `keyof`) to iterate through keys to create a type. - `[ in ]`
  - Mapping Modifiers: `readonly`, `?`. remove/add modifiers by prefixing with `-`/`+`.
  - Key Remapping via `as`: In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an `as` clause in a mapped type.
    - You can leverage features like template literal types to create new property names from prior ones.
    - You can filter out keys by producing never via a conditional type: `Exclude<...,...>`.
    - You can map over arbitrary unions, not just unions of `string | number | symbol`, but unions of any type.
```ts
type OptionsFlags<Type> = { [Property in keyof Type]: boolean }

type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```
- **Template Literal Types/模板字面量类型**: mapped types which change properties via template literal strings
  - build on string literal types, and have the ability to expand into many strings via unions. They have the same syntax as template literal strings(``` `%{XXX}` ```) in JavaScript, but are used in type positions.
  - String Unions in Types
  - Inference with Template Literals
  - Intrinsic String Manipulation Types: `Uppercase<StringType>`, `Lowercase<StringType>`, `Capitalize<StringType>`, `Uncapitalize<StringType>`

## Classes/类

- Class Members
  - Fields
  - `readonly`
  - Constructors
  - Methods
  - Getters / Setters
  - Index Signatures
- Class Heritage/遗产
  - `implements` Clauses
  - `extends` Clauses
- Member Visibility
  - `public`
  - `protected`
  - `private`
- Static Members
  - Special Static Names
  - Why Not Static Classes
- `static` Blocks in Classes
- Generic Classes
  - Type Parameters in Static Members
- `this` at Runtime in Classes
  - Arrow Functions
  - `this` parameters
- `this` Types
  - `this`-based type guards
- Parameter Properties
- Class Expressions
- Constructor Signatures
- `abstract` Classes and Members
  - Abstract Construct Signatures
- Relationships Between Classes

## Modules/模块

# Reference/指南

## Utility Types/工具类型

- `Awaited<Type>`: This type is meant to model operations like `await` in `async` functions, or the `.then()` method on `Promise`s - specifically, the way that they recursively unwrap `Promise`s.
- `Partial<Type>`: Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.
- `Required<Type>`: Constructs a type consisting of all properties of `Type` set to required. The opposite of `Partial`.
- `Readonly<Type>`: Constructs a type with all properties of `Type` set to `readonly`, meaning the properties of the constructed type cannot be reassigned.
- `Record<Keys, Type>`: Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.
- `Pick<Type, Keys>`: Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.
- `Omit<Type, Keys>`: Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals). The opposite of `Pick`.
- `Exclude<UnionType, ExcludedMembers>`: Constructs a type by excluding from `UnionType` all union members that are assignable to `ExcludedMembers`.
- `Extract<Type, Union>`: Constructs a type by extracting from `Type` all union members that are assignable to `Union`.
- `NonNullable<Type>`: Constructs a type by excluding `null` and `undefined` from `Type`.
- `Parameters<Type>`: Constructs a tuple type from the types used in the parameters of a function type `Type`. For overloaded functions, this will be the parameters of the last signature.
- `ConstructorParameters<Type>`: Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type `never` if `Type` is not a function).
- `ReturnType<Type>`: Constructs a type consisting of the return type of function `Type`. For overloaded functions, this will be the return type of the last signature.
- `InstanceType<Type>`: Constructs a type consisting of the instance type of a constructor function in `Type`.
- `NoInfer<Type>`: Blocks inferences to the contained type. Other than blocking inferences, `NoInfer<Type>` is identical to `Type`.
- `ThisParameterType<Type>`: Extracts the type of the `this` parameter for a function type, or `unknown` if the function type has no `this` parameter.
- `OmitThisParameter<Type>`: Removes the `this` parameter from Type. If `Type` has no explicitly declared this parameter, the result is simply `Type`. Otherwise, a new function type with no `this` parameter is created from `Type`. Generics are erased and only the last overload signature is propagated into the new function type.
- `ThisType<Type>`: This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type. Note that the `noImplicitThis` flag must be enabled to use this utility.
- Intrinsic String Manipulation Types
  - `Uppercase<StringType>`: Converts each character in the string to the uppercase version.
  - `Lowercase<StringType>`: Converts each character in the string to the lowercase equivalent.
  - `Capitalize<StringType>`: Converts the first character in the string to an uppercase equivalent.
  - `Uncapitalize<StringType>`: Converts the first character in the string to a lowercase equivalent.

## Cheat Sheets
* https://www.typescriptlang.org/cheatsheets/

TypeScript Cheat Sheets
- Control Flow Analysis
- Interface
- Type
- Class

## Decorators/装饰器
## Declaration Merging/声明合并
## Enums/枚举
## Iterators and Generators/迭代器和生成器
## JSX

[JSX](https://facebook.github.io/jsx/) is an embeddable XML-like syntax. It is meant to be transformed into valid JavaScript, though the semantics of that transformation are implementation-specific. JSX rose to popularity with the [React](../../frameworks/React/React.md) framework, but has since seen other implementations as well. **TypeScript supports embedding, type checking, and compiling JSX directly to JavaScript**.

## Mixins/混入
## Namespaces/命名空间
## Namespaces and Modules/命名空间和模块
## Symbols/符号
## Triple-Slash Directives/三重斜杠指令
* https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

## Type Compatibility/类型兼容性
## Type Inference/类型推断
## Variable Declaration/变量声明

# Modules Reference/模块指南

# Declaration Files/声明文件

# JavaScript
## JS Projects Utilizing TypeScript

## Type Checking JavaScript Files

## JSDoc Reference
* https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

The list below outlines which constructs are currently supported when using JSDoc annotations to provide type information in JavaScript files.

## Creating `.d.ts` Files from `.js` files


# Project Configuration
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## `tsconfig.json`
* https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
* [tsconfig-schema.json](./tsconfig-schema.json)

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies **the root files** and **the compiler options required to compile the project**.

JavaScript projects can use a `jsconfig.json` file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

## `tsc`
* https://www.typescriptlang.org/docs/handbook/compiler-options.html

Running `tsc` locally will compile the closest project defined by a `tsconfig.json`, or you can compile a set of TypeScript files by passing in a glob of files you want. 
When input files are specified on the command line, `tsconfig.json` files are ignored.

examples:
```shell
# Run a compile based on a backwards look through the fs for a tsconfig.json
tsc
# Emit JS for just the index.ts with the compiler defaults
tsc index.ts
# Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts
# Emit files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json
# Emit d.ts files for a js file with showing compiler options which are booleans
tsc index.js --declaration --emitDeclarationOnly
# Emit a single .js file from two files via compiler options which take string arguments
tsc app.ts util.ts --target esnext --outfile index.js
```

more: Compiler Options
- CLI Commands
  - `--init`: Initializes a TypeScript project and creates a `tsconfig.json` file.
  - ...
- Build Options
- Watch Options
- Compiler Flags


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
* https://www.typescriptlang.org/tools/

- Playground
- TSConfig Reference
- Cheat Sheets
- Developer Tools
  - **Sandbox**: A DOM library for interacting with TypeScript and JavaScript code, which powers the heart of the TypeScript playground
  - **Twoslash**: A markup format for TypeScript code, ideal for creating self-contained code samples which let the TypeScript compiler do the extra leg-work. Twoslash adds the ability to declare tsconfig options inline, split a sample into multiple files and a few other useful commands.
  - **TypeScript VFS**: TypeScript VFS lets you create a self-contained TypeScript environment entirely under your control. This library is used to power the Playground, and provides the underlying tooling for twoslash code samples.
  - **Playground Plugins**: The new TypeScript Playground allows people to hook into the Playground and extend it in ways in which the TypeScript team don't expect. The sidebar of the Playground uses the same plugin infrastructure as external plugins, so you have the same level of access as the playground to build interesting projects. Playground plugins are built via the DOM API and an expansive Design System, however, you're free to use a framework like React or Svelte at runtime.
  - **Bug Workbench**: The bug workbench uses Twoslash to help you create accurate bug reports. Twoslash is a markup format for TypeScript files which lets you highlight code, handle-multiple files and show the files the TypeScript compiler creates.

## Others
* [expect-type](https://github.com/mmkal/expect-type): Compile-time tests for types. Useful to make sure types don't regress into being overly-permissive as changes go in over time.
* TSC
* TSX
* [tslib](https://github.com/Microsoft/tslib): Runtime library for TypeScript helpers. 
* [TSDoc](../../tools/TSDoc/TSDoc.md)
* [ts-node](https://github.com/TypeStrong/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
* [TypeDoc](https://typedoc.org/): TypeDoc converts comments in TypeScript source code into rendered HTML documentation or a JSON model. It is extensible and supports a variety of configurations. Available as a CLI or Node module.
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
* [Learning TypeScript](../../books/LearningTypeScript.md)
* [Effective TypeScript](../../books/EffectiveTypeScript.md)
* Bierman, Gavin M., Martín Abadi and Mads Torgersen. **Understanding TypeScript**. European Conference on Object-Oriented Programming (2014).
* Panagiotis Vekris, Benjamin Cosman, and Ranjit Jhala. 2016. **Refinement types for TypeScript**. SIGPLAN Not. 51, 6 (June 2016), 310–325. https://doi.org/10.1145/2980983.2908110
* [The Concise TypeScript Book](https://github.com/gibbok/typescript-book): A Concise Guide to Effective Development in TypeScript. Free and Open Source.

tools:
* [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped): The repository for high quality TypeScript type definitions.
  * ex: `@types/react` (npm `@types` scope)
* [npm displays packages with bundled TypeScript declarations](https://github.blog/changelog/2020-12-16-npm-displays-packages-with-bundled-typescript-declarations/): 2020-12-16
* [Centralized Recommendations for TSConfig bases](https://github.com/tsconfig/bases): Hosts TSConfigs for you to extend in your apps, tuned to a particular runtime environment. Owned and improved by the community. Basically Definitely Typed for TSConfigs.
* [TSxxxx error code](https://github.com/microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json): `cat diagnosticMessages.json | jq -r 'to_entries[]|"TS\(.value.code) [\(.value.category)]: \(.key)"'` - [TSdiagnosticMessages.txt](./TSdiagnosticMessages.txt)
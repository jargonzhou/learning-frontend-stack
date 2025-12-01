# Learning TypeScript
* https://www.learningtypescript.com/

# 1. From JavaScript to TypeScript

TypeScript is 4 things
- Programming language/编程语言
- Type checker/类型检查器
- Compiler/编译器
- Langauge service/语言服务: a program that uses type checker to tell IDE how to provide helpful utilities to developers.

# 2. The Type System

basic types
- `null`
- `undefined`
- `boolean`: `true`, `false`
- `string`: `"hi"`
- `number`: `0`, `2.1`
- `bigint`: `0n`
- `symbol`: `Symbol("hi")`

type system: the set of rules for how a programming langauge understands what types the constructs in a program may have.

kind of errors:
- syntax: block TypeScript from being converted to JavaScript
- type: mismatches detected by the type checker

TypeScript's checking of whether a value is allowed to be provided to a fuction call or variable is called **assignability/可赋值性**.

evolving `any`: evolve understanding of the variable's type each time a new value is assigned.

type annotation

object shape

ESM(ECMASCript modules)
- module: a file with a top-level `export` or `import`
- script: any file that is not a module

# 3. Unions and Literals

**unions/并**: expanding a value's allowed type to be two or more possible types.
- `|` operator
- union properties

**narrowing/窄化**: reducing a value's allowed type to **not** be one or more possible types
- type guard
  - assignment narrowing
  - conditional checks: `if`
  - `typeof` operator: `!`, `else` `? :` also support.

**literal type/字面量类型**: the type of a vlue that is known to be a specific value of a primitive, rather than any of those primitive's values at all.

**strict null checking/严格空检查**
- `tsconfig.json` `strictNullChecks`: `null | undefined`
- truthiness narrowing/真值窄化
  - all values in JavaScript are truthy except for thosed falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

**type aliases/类型别名**: `type MyName = ...`
- type aliases may reference other type aliases, even refer to each other.
- type aliases don't have to be declared in order of usage.

# 4. Objects

when create an object literal with `{...}` syntax, TypeScript will consider it to be a new **object type/对象类型**, or type shape, based on its properties.
- the object type will have the same property names and primitive types as the object's values.
- access properties of the value: `value.member`, `value['member']`.

declaring object types, aliased object types

TypeScript's type system is **structurally typed/结构化类型的**: any value that happens to satisfy a type is allowed to be used as a value of that type.
- structurally typed: there is a staic system(a type checker) checking the type.
- **duck typed/鸭子类型**: nonthing checks object types until they're used at runtime.
- usage checking: required properties, properties' type
- **excess property checking/过多属性检查** */: type error when a variable is declared with an object type and its initial value has more fields than the object type describes.
- nested object types
- optional properties: `?:`

union of object types
- inferred object-type unions: with `?`
- explicit object-type unions: only allow access to properties that exists on all of those union types
- narrowing object types: `"property" in object`
- discriminated unions: have a property on the object indicate what shape the object is. ex `type` property

intersection types: `&`, a type that is multiple types at the same time
- used with aliased object types to create a new type taht combines multiple existing object types.
- primitive types cannot be joinged together as constituents in an intersection type: result is `never` type (bottom type)

# 5. Functions

function parameters
- required parameters
- optional parameters: annotation `param?: Type`, type `Type | undefined`
  - any optional parameters for a function must be the last parameters.
- default parameters: optional parameters with default value `= value`
- rest parameters: spread operator `...`
  - ex: `...songs: string[]`

return types
- infer the return type
- explicit return types
- `void` returns
- `never` returns

funtion types
- ex `(songs: string[], count?: number) => number`
- parameter type inferences
- function type aliases

function overloads
- overload signatures: declare different version of the funtion's name, parameters, and returrn types multiple times before one final *implementation signature* and the body of the function.
- the implementation signature has to be compatible with all of the overload signatures.

# 6. Arrays

evolving `any[]`: can receive any content.

TypeScript assumes all array member accessres return a member of that array.

arrays can be joined together using the `...` spread operator.

tuple arrays: have a specific known type at each index.
- ex: `[number, string]`
- variable length array types cannot assign to tuple types.
- tuples of different lengths are not assignable to each other.
- tuples as rest parameters.
- TypeScript generally treats created arrays as variable length arrays, not tuples.
- const assertion: `as const` operator, tell TypeScript to use the most literal, read-only possible form of the value when inferring its type.

# 7. Interfaces
# 8. Classes
# 9. Type Modifiers
# 10. Generics

# 11. Declaration Files/声明文件

`.d.ts`

declaring runtime values/声明运行时值

built-in declarations
- library declarations: `lib.[target].d.ts`(target: ES5, ES2020, ESNext)
- DOM declarations: `lib.dom.d.ts`

module declarations/模块声明
- `declare module "NAME" {}`
- wildcard: ex `"*.module.css"`

# 12. Using IDE Features



# 13. Configuration Options
# 14. Syntax Extensions
# 15. Type Operations


# See Also
* Effective TypeScript
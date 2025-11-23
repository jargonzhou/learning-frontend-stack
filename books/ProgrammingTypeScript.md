# Programming TypeScript

# 1. Introduction
# 2. TypeScript: A 10_000 Foot View

<!--
Scoped Declarations
-->

# 3. All About Types

<!-- 
Type Operators
Advanced Types 
Type Utilities
-->

# 4. Functions
# 5. Classes and Interfaces
# 6. Advanced Types
# 7. Handling Errors
# 8. Asynchronous Programming, Concurrency, and Parallelism
# 9. Frontend and Backend Frameworks
# 10. Namespaces.Modules
# 11. Interoperating with JavaScript
# 12. Building and Running TypeScript

TSC generated artifacts
- `.js`: JavaScript
- `.js.map`: source maps. link each piece of generated JavaScript back to the specific line and column of the TypeScript file that it was generated from.
- `.d.ts`: type declarations. let other TypeScript projects take advantage of generated types.
- `.d.ts.map`: declaration maps. speed up compilation times for TypeScript projects.

TSC environment settings
- `target`: set the JavaScript version you want to transpile to: `es5`, `es2015`, ...
- `module`: set the module system you want to target: `es2015` modules, `commonjs` modules, `systemjs` modules, ...
- `lib`: tell TypeScript which JavaScript features are available(natively or via a polyfill) in the target environment: `es5` features, `es2015` features, `dom`, ...
  - polyfill
    - [core-js](https://www.npmjs.com/package/core-js): Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2025: promises, symbols, collections, iterators, typed arrays, many other features, ECMAScript proposals, some cross-platform WHATWG / W3C features and proposals like URL. You can load only required features or use it without global namespace pollution.
    - [@babel/polyfill](https://babeljs.io/docs/babel-polyfill): Babel includes a polyfill that includes a custom regenerator runtime and core-js. As of Babel 7.4.0, this package has been deprecated in favor of directly including `core-js/stable` (to polyfill ECMAScript features)


# 13. Conclusion
# A. Type Operators
# B. Type Utilities
# C. Scoped Declarations
# D. Recipes for Writing Declaration Files for Third-Party JavaScript Modules
# E. Triple-Slash Directives
# F. TSC Compiler Flags for Safety
# G. TSX
# JavaScript Programming Language

## Basics

<!--
JavaScript in HTML
Language Basics
  syntax
  keywords, reserverd words
  variables
  data types
  operators
  statements
  functions
  variables, scope, memory
  basic reference types
  collection reference types
-->

## Iterators, Generators

## Objected-Oriented Programming

<!--
objects
classes
-->

## Proxies, Reflect

## Functions

## Promises, Async Functions

## BOM(Browser Object Model)

<!--
window
location
navigator
screen
history
-->

## Client Detection

<!--
capability
user-agent
software
hardware
-->

## DOM(Document Object Model)

<!--
Node
Document
Element
Text
Comment
CDATASection
DocumentType
DocumentFragment
Attr

mutation observers

DOM extensions:
- selectors API
- element traversal
- HTML5
- proprietary extensions

DOM level 2 and 3:
- DOM changes
- styles
- traversals
- ranges
-->

## Events

<!--
event flow
event handlers
event object
event types
composition events
HTML5 events
device events
simulating events
-->

## Animation and Graphics with Canvas

## Forms

<!--
form
text boxes
select box
form serialization
rich text editing
-->

## JavaScript API

<!--
atomics, SharedArrayBuffer
cross-context messaging
encoding API
Blob, File
media element
native drag and drop
notification API
page visibility API
streams API
timing API
web components
web cryptograph API
-->

## Error Handling and Debugging

<!--
browser error reporting
error handling
debugging techniques
-->

## XML, JSON

## Network Requests, Remote Resources

<!--
XMLHttpRequest
progress events
CORS(Cross-Origin Resource Sharing)
Fetch API
Beacon API
Web Sockets
Security
-->

## Client-Side Storage

<!--
Cookie
Web Storage
IndexedDB
-->

## Modules

- IIFE(Immediately Invoked Function Expression)
- CommonJS: Node.js
```javascript
require(...)
exports // object
```
- AMD(Asynchronous Module Definition)
```javascript
define(...)
```
- UMD(Univarsql Module Definition): use IIFE to combine CommonJS and AMD.
- ES6 module
```html
<script type="module" ...></script>
```
```javascript
import // statement
export // statement
```

More:
* [The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/)
* [Differences Between JavaScript Modules: CJS, AMD, UMD, and ESM](https://medium.com/@halilatilla/differences-between-javascript-modules-cjs-amd-umd-and-esm-f60124de131b)
	- `CJS`: CommonJS
		- server side, NodeJS
	- `AMD`: Asynchronous Module Definition
		- browser-based application
	- `UMD`: Universal Module Definition
		- both support CommonJS and AMD
	- `ESM`: ECMAScript Module
		- the official module system of JavaScript

Module Resolution
* typescript: https://www.typescriptlang.org/docs/handbook/module-resolution.html
* node.js: https://nodejs.org/api/packages.html#determining-module-system

* [What is the difference between .js and .mjs files](https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files): Node.js will treat `.cjs` files as CommonJS modules and `.mjs` files as ECMAScript modules.


## Workers

<!--
Dedicated Workers
Shread Workers
Service Workers
-->
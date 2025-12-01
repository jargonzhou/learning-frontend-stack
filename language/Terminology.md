# Terminology

# Control flow based type analysis/基于控制流的类型分析

See Also: 
* [Flow-sensitive typing - wikipedia](https://en.wikipedia.org/wiki/Flow-sensitive_typing)
* [TypeScript - Narrowing](../language/TypeScript/TypeScript.md#narrowing缩小收窄)
* [TypeScript Type Guards - S3Schlools](https://www.w3schools.com/typescript/typescript_type_guards.php)
* [TypeScript Control Flow Analysis - GeeksforGeeks](https://www.geeksforgeeks.org/typescript/typescript-control-flow-analysis/)

# DOM(Document Object Model)/文档对象模型

# ECMASCript
see [JavaScript Specification](../language/JavaScript.md#specification)

# JavaScript execution model/JavaScript执行模型
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model

JavaScript execution requires the cooperation of two pieces of software: the **JavaScript engine/JavaScript引擎** and the **host environment/宿主环境**.
- The JavaScript engine implements the ECMAScript (JavaScript) language, providing the core functionality. It takes source code, parses it, and executes it. 
- However, in order to interact with the outside world, such as to produce any meaningful output, to interface with external resources, or to implement security- or performance-related mechanisms, we need additional environment-specific mechanisms provided by the host environment/宿主环境提供的特定于环境的机制. For example, the **HTML DOM** is the host environment when JavaScript is executed in a web browser. **Node.js** is another host environment that allows JavaScript to be run on the server side.

In the JavaScript specification, each autonomous executor of JavaScript is called an **agent**/代理, which maintains its facilities for code execution:
- **Heap (of objects)/对象堆**: a name to denote a large (mostly unstructured) region of memory. It gets populated as objects get created in the program.
- **Queue (of jobs)/作业队列**: this is known in HTML (and also commonly) as the event loop which enables asynchronous programming in JavaScript while being single-threaded.
- **Stack (of execution contexts)/执行上下文栈**: this is what's known as a call stack and allows transferring control flow by entering and exiting execution contexts like functions.

An agent on the web can be one of the following:
- A **Similar-origin window agent**, which contains various `Window` objects which can potentially reach each other, either directly or by using `document.domain`. If the window is origin-keyed, then only same-origin windows can reach each other.
- A **Dedicated worker agent** containing a single `DedicatedWorkerGlobalScope`.
- A **Shared worker agent** containing a single `SharedWorkerGlobalScope`.
- A **Service worker agent** containing a single `ServiceWorkerGlobalScope`.
- A **Worklet agent** containing a single `WorkletGlobalScope`.

See Also
* [List of JavaScript engines - wikipedia](https://en.wikipedia.org/wiki/List_of_JavaScript_engines)
  * [V8](https://v8.dev/): V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application. - Node.js, Chrome, Opera
  * [SpiderMonkey](https://spidermonkey.dev/): SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects. It is written in C++, Rust and JavaScript. You can embed it into C++ and Rust projects, and it can be run as a stand-alone shell. It can also be compiled to WASI. - Firefox
  * JSCore - Safari
  * Chakra - Edge
  * [GraalJS](https://www.graalvm.org/javascript/): GraalJS is a fast JavaScript language implementation built on top of GraalVM. It is ECMAScript-compliant, provides interoperability with Java and other Graal languages, common tooling, and, if run on the GraalVM JDK, provides the best performance with the Graal JIT compiler by default. You can also use GraalJS with Oracle JDK or OpenJDK. GraalJS is a suitable replacement for projects wanting to migrate from Nashorn or Rhino to a JavaScript engine that supports new ECMAScript standards and features.
* [JavaScript Environment: Syntax, Usage, and Examples](https://mimo.org/glossary/javascript/environment): Browser, Node.js, Deno

# MDN(Mozilla Developer Network)

[MDN](https://developer.mozilla.org/) is an open-source, collaborative project owned by Mozilla Corporation and developed by Mozilla, in partnership with a global community of volunteers and partners. Mozilla’s MDN team leads the platform’s development, content strategy, and overall direction, while the community actively contributes to content creation, translations, and browser compatibility improvements, ensuring MDN remains a vital and evolving resource for all.

What we offer
- MDN Web Docs: Your comprehensive resource for web development documentation, covering everything from CSS, HTML, JavaScript, Web APIs, and other web technologies.
  - https://developer.mozilla.org/en-US/docs/Web
- MDN Learn: Ideal for beginners, MDN Learn offers guides and a structured curriculum to kickstart your web development journey. Enhance your learning with interactive courses from our partner, Scrimba.
  - https://developer.mozilla.org/en-US/docs/Learn_web_development
  - https://developer.mozilla.org/en-US/docs/MDN/Guides
  - https://developer.mozilla.org/en-US/docs/MDN/Tutorials
- MDN Blog: Stay updated with the latest in web development. [Our blog](https://developer.mozilla.org/en-US/blog/) features updates, tips, tutorials from web experts, MDN announcements, and curated sponsored content.
- MDN Plus: Experience a personalized MDN with our premium subscription service. Enjoy features like AI-powered assistance and Collections to streamline your workflow.
  - https://developer.mozilla.org/en-US/plus
- MDN Tools: Experiment and learn with tools like [Playground](https://developer.mozilla.org/en-US/play) for live coding and HTTP Observatory[](https://developer.mozilla.org/en-US/observatory) for analyzing website security, designed to enhance your development experience.

See Also
- [Glossary of web terms](https://developer.mozilla.org/en-US/docs/Glossary)

# Module System/模块系统
see [Modules](../books/ProfessionalJavascriptForWebDevelopers.md#modules)

# Module Bundler/模块打包器
* https://en.wikipedia.org/wiki/Module_bundler

A module bundler is a software development tool that takes multiple source files and their dependencies (modules) and combines them into one or more output files called **bundles**/包. Module bundlers are commonly used in front-end web development to package JavaScript, CSS and other assets for efficient delivery to web browsers.

Module bundlers typically start from one or more entry points and build a dependency graph of all imported modules before producing the final bundles, often applying optimisations such as minification/代码压缩 and tree shaking/摇树优化.

See Also: Vite, Webpack, Rollup, Esbuild, Browserify

# Opinionated Framework/带主观倾向性的框架

An opinionated framework **provides a predefined structure and enforces specific conventions and best practices for development**. It has a "preferred way" of doing things, which simplifies decision-making but may limit flexibility.

Non-opinionated frameworks, sometimes called "flexible" or "unopinionated," **provide fewer guidelines and leave most architectural decisions to the developer**. They are more adaptable but require more effort to set up and maintain.

See Also
* [What is opinionated software? - StackOverflow](https://stackoverflow.com/questions/802050/what-is-opinionated-software) - 2009-04-29
* [Opinionated vs. Non-Opinionated Frameworks: Understanding the Difference - DEV](https://dev.to/muhammadmedhat/opinionated-vs-non-opinionated-frameworks-understanding-the-difference-2379) - 2024-11-09

# Polyfill/垫片/填充/腻子脚本
* https://en.wikipedia.org/wiki/Polyfill_(programming)

Polyfill (provide implementations for) any modern features that are missing in the JavaScript runtime.

# Transpile/转译

Transpile (autommatically convert) applications from the latest version of JavaScript to the oldest JavaScript version that a platform you target suppport

See Also: [Babel](../tools/Babel/Babel.md)

# Vanilla JavaScript/纯JavaScript

Vanilla JavaScript refers to using pure JavaScript without relying on any additional libraries or frameworks.

See Also: [You SHOULD Learn Vanilla JavaScript Before JS Frameworks](https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks)

# See Also
* [Glossary of web terms - MDN](https://developer.mozilla.org/en-US/docs/Glossary)
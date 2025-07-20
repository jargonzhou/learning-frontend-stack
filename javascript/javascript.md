# JavaScript
* [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

## Books
* Matt Frisbie. **Professional Javascript® for Web Developers**. John Wiley & Sons, 2020.

## Specification
* [ECMAScript version history - wikipedia](https://en.wikipedia.org/wiki/ECMAScript_version_history)
* [JavaScript Versions - W3Schools](https://www.w3schools.com/js/js_versions.asp)
* [ECMAScript 2015 Language Specification – ECMA-262 6th Edition](https://262.ecma-international.org/6.0/): ES6, ES2015

## Scaffolding
* [Yeoman](https://yeoman.io/)
	- [Getting Started With Yeoman](https://yeoman.io/learning/)
	- [Node 14 with warning (node:31518) Warning: Accessing non-existent property 'column' of module exports inside circular dependency](https://github.com/nodejs/node/issues/32987)
* [Learn setting up a simple Frontend environment for beginners](https://github.com/imalitavakoli/learn-frontend-env-setup): 2023-07, Github, Let's learn setting up a simple Frontend Developing environment for beginners!
* [How to Build a reusable Javascript development environment](https://medium.com/the-andela-way/how-to-build-a-reusable-javascript-development-environment-f13146b77fdf): 2019-06
* [Modern Javascript Development Environment](https://dev.to/tech_nikkhil/modern-javascript-development-environment-nik): 2021-06
* [Setting Up Your Development Environment for React: A Comprehensive Guide](https://medium.com/@trilogicalshelp/setting-up-your-development-environment-for-react-a-comprehensive-guide-903293512fab): 2023-10

* [Create App: Frontend build config generator](https://createapp.dev/)
	- webpack, Parcel, Snowpack
	- Main library: No, React, Svelte, Vue
	- UI library: Bootstrap, Tailwind CSS
	- Test framework: Jest, Mocha, Chai, Jasmine, AVA, Cypress, TestCafe
	- Transpiler: Babel, Typescript
	- Styling: CSS, CSS Modules, PostCSS, Sass, Less, stylus
	- Image: SVG, PNG
	- Utilities: moment, lodash
	- Linting: ESLint, Prettier
	- Optimization: Code split vendors
	- Webpack plugins: HTML webpack plugin, Webpack Bundle Analyzer, MiniCssExtractPlugin, CopyWebpackPlugin, CleanWebpackPlugin

## Dependency Management
* [npm](../npm/npm.md)
* [yarn](https://yarnpkg.com/)

### Compatibility
* [node.green](https://node.green/): Node.js ECMAScript compatibility tables 

### Module System
* [js-language.md#modules](./js-language.md#modules)

### Browser
* [webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/): perform runtime analysis of cross-browser compatibility and other checks

> [RequireJS](https://requirejs.org/)
> RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

> [Browserify](https://browserify.org/)
> Browserify lets you `require('modules')` in the browser by bundling up all of your dependencies.

#### DOM(Document Object Model)
* [DOM (Document Object Model) - MDN](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
* [Best Free JavaScript DOM Manipulation Libraries](https://code.tutsplus.com/best-free-dom-manipulation-libraries--cms-106878a)
	- code.jQuery - last release 3.7.1 2023-08-28
		- [Sizzle](https://github.com/jquery/sizzle): A pure-JavaScript CSS selector engine designed to be easily dropped in to a host library. - last release 2.3.10 2023-02-15
	- [Umbrella JS](https://umbrellajs.com/): Tiny library for DOM manipulation and events. - last release 3.3.3 2024-04-20
	- [Zepto](https://zeptojs.com/): Zepto is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. - last release 1.2.0 2016-07-14
	- [Bliss.js library](https://blissfuljs.com/): Want to use Vanilla JS but find native APIs a bit unwieldy? Bliss is for you. - last release 1.0.6 2019-06-24
		- [Vanilla JS](http://vanilla-js.com/): Vanilla JS is a fast, lightweight, cross-platform framework.
			- [What is Vanilla JavaScript?](https://www.geeksforgeeks.org/what-is-vanilla-javascript/): VanillaJS refers to the pure version of JavaScript which does not use any external tool like JavaScript libraries or Frameworks.
for building incredible, powerful JavaScript applications.

* [jsdom](https://github.com/jsdom/jsdom): A JavaScript implementation of various web standards, for use with Node.js.

#### Styling
> Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
* [Home](https://sass-lang.com/)
* [Tutorial](https://sass-lang.com/guide/)
* [Install](https://sass-lang.com/install/)

> Sass has two syntaxes! 
> The SCSS syntax (`.scss`) is used most commonly. It’s a superset of CSS, which means all valid CSS is also valid SCSS. 
> 
> The indented syntax (`.sass`) is more unusual: it uses indentation rather than curly braces to nest statements, and newlines instead of semicolons to separate them. All our examples are available in both syntaxes.
```shell
npm install -g sass
```

## Frameworks
* [Comparison of JavaScript-based web frameworks - wikipedia](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks)
* [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): a list of all the APIs and interfaces (object types) that you may be able to use while developing your Web app or site.

### Client-Side Frameworks
* ref: [MDN > Guides > Tools and testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing)
Understanding client-side web development tools
* Client-side tooling overview
	- safety net
		- linters: ESLint, [csslint](http://csslint.net/), [webhint](https://webhint.io/)
		- source code control: Git
		- code formatters: Prettier
		- bundlers/packagers: Parcel, webpack
	- transformation
		- write code using the latest language features: 
			- Babel
			- [PostCSS](https://postcss.org/)
		- write code in an entirely different language
			- #8.1 Sass|Sass/SCSS
			- index.TypeScript|TypeScript
			- frameworks such as index.React|React, index.Vue|Vue, [Ember](https://emberjs.com/)
	- post-development
		- testing tools
			- frameworks for writing tests
				- Jest
				- Mocha
				- [Jasmine](https://jasmine.github.io/)
			- automated test running and notification systems
				- [Travis CI](https://travis-ci.org/)
				- [Jenkins](https://www.jenkins.io/)
				- [Circle CI](https://circleci.com/)
				- [others](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration)
		- deployment tools
			- [Netlify](https://www.netlify.com/)
			- [Vercel](https://vercel.com/)
			- [GitHub Pages](https://pages.github.com/)
		- others
			- [Code Climate](https://codeclimate.com/): gather code quality metrics
			- [webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/): perform runtime analysis of cross-browser compatibility and other checks
			- [GithHub bots](https://probot.github.io/): provide more Github functionality
			- [Updown](https://updown.io/): provide app uptime monitor
* Command line crash course
	- [Glitch](https://glitch.com/): Glitch is the friendly place where everyone builds the web. Start a new blog, play with React, or build new worlds with WebXR.
	- [tldr](https://updown.io/): Simplified and community-driven man pages
	- npm: index.NodeJS|Node.js, Prettier
	- other tools: [bat](https://github.com/sharkdp/bat), [prettyping](https://denilson.sa.nom.br/prettyping/), [htop](https://htop.dev/)
* Package management basics
	- package registries: index.NodeJS#6.2 NPM|npmjs.com, [Github package registry service](https://github.com/features/packages)
	- using the package ecosystem: Parcel
	- package manager clients
		- index.NodeJS#6.2 NPM|npm
		- [pnpm](https://pnpm.js.org/)
		- [Yarn](https://yarnpkg.com/)
* Introducing a complete toolchain
	- ex: JSX, `import`, Prettier, ESLint, PostCSS, Parcel, Github, Netlify
* Deploying our app
	- Netlify
	- testing
		- end-to-end testing
		- integration testing
		- unit testing
		- more: [Functional testing - wikipedia](https://en.wikipedia.org/wiki/Functional_testing), [Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
	
Understanding client-side JavaScript frameworks
* Introduction to client-side frameworks
	- React: 2013. ReactDOM for web, React Native for mobile index.React
	- Ember: 2011-12
	- Vue: 2014 index.Vue
	- Svelte: book [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action)
	- Angular: 2016-08-14
* Framework main features
	- Domain-specific languages
	- Writing components
	- Styling components
	- Handling dependencies
	- Rendering elements
	- Routing
	- Testing

* Git and GitHub
* Cross browser testing
* [Frontend Frameworks Popularity.md](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190)

* code.jQuery
* Bootstrap
* [Angular](https://angular.io/)

bundler:
* webpack
* Parcel
* [Rollup](https://rollupjs.org/)

build systems: https://yeoman.io/learning/
* [Grunt](http://gruntjs.com/)
* [Gulp](http://gulpjs.com/)

### Server-Side Frameworks
* [Comparison of server-side web frameworks - wikipedia](https://en.wikipedia.org/wiki/Comparison_of_server-side_web_frameworks#JavaScript)
	- Express.js
	- Meteor
	- Sails.js
	- Next.js
	- Remix


* index.NodeJS
* index.TypeScript
* Express: book.Web Development with Node and Express
* HTTP: Axios
* WebSocket: [ws: a Node.js WebSocket library](https://github.com/websockets/ws)
* TypeORM
* MySQL: sequelize
* MongoDB: mongoose
* Redis: node-redis
* Kafka: https://cwiki.apache.org/confluence/display/KAFKA/Clients

[Server-side website programming - MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side)
* First steps
* Django Web Framework (`Python`)
* Express web framework (`Node.js/JavaScript`)

## API Doc and Style
* JSDoc
* [tsoa](https://tsoa-community.github.io/docs/): OpenAPI-compliant Web APIs using TypeScript and Node
* JSLint
* JSHint
* ESLint
* Prettier

## Logging
* [The 10 Best Node.js Logging Libraries](https://hackernoon.com/the-10-best-nodejs-logging-libraries)
* log4js: https://github.com/log4js-node/log4js-node
* Winston: https://github.com/winstonjs/winston
* Pino: https://github.com/pinojs/pino

## Testing

Unit Test:
* [What Is the Best Unit Testing Framework for JavaScript?](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/)
* Jest
* Mocha
* Chai

End-to-End Test:
* Puppeteer
* Playwright

## IDE
* [tmLanguage Schema](https://github.com/martinring/tmlanguage)
> This is a JSON schema for TextMate grammar definitions.
> Can be used to get intellisense working when editing grammar definitions within Visual Studio Code.

* [TextMate 1.5.1 - Language Grammars](https://macromates.com/manual/en/language_grammars)
* [TypeScript-TmLanguage](https://github.com/microsoft/TypeScript-TmLanguage): TextMate grammar files for TypeScript for VS Code, Sublime Text, and Atom.

### VS Code
* [JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
* [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig): `jsconfig.json` is `tsconfig.json` with `"allowJs"` attribute set to `true`.


## Miscellaneous

### WebGL(Web Graphics Library)
* https://www.khronos.org/webgl/
* https://get.webgl.org/
* [WebGL: 2D and 3D graphics for the web](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API): MDN, WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML `<canvas>` elements.

> WebGL: Low-Level 3d Graphics API Based On OpenGL ES
>
> WebGL™ is a cross-platform, royalty-free open web standard for a low-level 3D graphics API based on OpenGL ES, exposed to ECMAScript via the HTML5 Canvas element. Developers familiar with OpenGL ES 2.0 will recognize WebGL as a Shader-based API using GLSL, with constructs that are semantically similar to those of the underlying OpenGL ES API. It stays very close to the OpenGL ES specification, with some concessions made for what developers expect out of memory-managed languages such as JavaScript. WebGL 1.0 exposes the OpenGL ES 2.0 feature set; WebGL 2.0 exposes the OpenGL ES 3.0 API.
>
>WebGL brings plugin-free 3D to the web, implemented right into the browser. Major browser vendors Apple (Safari), Google (Chrome), Microsoft (Edge), and Mozilla (Firefox) are members of the WebGL Working Group.

OpenGL: https://www.opengl.org/
>[What is OpenGL?](https://www.khronos.org/opengl/wiki/FAQ#What_is_OpenGL?)
>
> [OpenGL](https://www.khronos.org/opengl/wiki/OpenGL "OpenGL") is the name for the [specification that describes the behavior](https://www.khronos.org/opengl/wiki/OpenGL_Specification "OpenGL Specification") of a rasterization-based rendering system. It defines the API through which a client application can control this system. The OpenGL rendering system is carefully specified to make hardware implementations allowable.
>
>Hardware vendors, the people who make GPUs, are responsible for writing implementations of the OpenGL rendering system. Their implementations, commonly called "drivers", translate OpenGL API commands into GPU commands. If a particular piece of hardware is unable to implement all of the OpenGL specification via hardware, the hardware vendor must still provide this functionality, typically via a software-based implementation of the features missing from hardware.


## FAQ

* [HTML encoding issues - "Â" character showing up instead of "&nbsp;"](https://stackoverflow.com/questions/1461907/html-encoding-issues-%C3%82-character-showing-up-instead-of-nbsp)
	- for HTML4: `<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />`
	- for HTML5: `<meta charset="utf-8">`


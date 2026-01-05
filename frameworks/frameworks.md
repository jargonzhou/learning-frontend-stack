# Frameworks
* [Bootstrap](./Bootstrap/Bootstrap.md): The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
* [Bulma](https://github.com/jgthms/bulma): Bulma is a modern CSS framework based on Flexbox.
* [Crawlee](./Crawlee/Crawlee.md): Crawlee is a web scraping and browser automation library.
* [Electron](./Electron/Electron.md): The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by the Visual Studio Code and many other apps.
* [jQuery](./jQuery/jQuery.md): jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
* Vanilla JS: Vanilla JavaScript refers to using pure JavaScript without relying on any additional libraries or frameworks.
* [React](./React/React.md): React is a JavaScript library for building user interfaces.
* [SPA](./SPA/SPA.md): Single Page Web Applications
* [Svelte](https://github.com/sveltejs/svelte): Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
* [Vue](./Vue/Vue.md): Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [Vue 2](./Vue2/Vue2.md): Vue is a progressive framework for building user interfaces. Vue 2 has reached End of Life on December 31st, 2023.

more:
* [Knockout](https://github.com/knockout/knockout): Knockout is a JavaScript MVVM (a modern variant of MVC) library that makes it easier to create rich, desktop-like user interfaces with JavaScript and HTML. It uses *observers* to make your UI automatically stay in sync with an underlying data model, along with a powerful and extensible set of *declarative bindings* to enable productive development.
* [Ext JS](https://www.sencha.com/products/extjs/): Ext JS is a comprehensive JavaScript framework that lets you build cross-platform web and mobile applications for any modern device.
* [Total.js Platform](https://www.totaljs.com/): Total.js Platform is a collection of server-side & client-side [JavaScript/Node.js libraries](https://www.totaljs.com/platform/), [Web Components](https://www.totaljs.com/components/), [Icons](https://componentator.com/icons/), practices, and [Complete Node.js apps](https://www.totaljs.com/apps/) written in pure JavaScript, mostly without dependencies. [Free and open-source](https://www.totaljs.com/license/).
* [Gatsby](https://github.com/gatsbyjs/gatsby): Gatsby is a free and open-source framework based on React that helps developers build blazing fast websites and apps.

# Client-Side Frameworks
* [MDN > Guides > Tools and testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing)

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
			- SCSS
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
	- npm: Node.js, Prettier
	- other tools: [bat](https://github.com/sharkdp/bat), [prettyping](https://denilson.sa.nom.br/prettyping/), [htop](https://htop.dev/)
* Package management basics
	- package registries: index.NodeJS#6.2 NPM|npmjs.com, [Github package registry service](https://github.com/features/packages)
	- using the package ecosystem: Parcel
	- package manager clients
		- npm
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

* jQuery
* Bootstrap
* [Angular](https://angular.io/)

bundler:
* webpack
* Parcel
* [Rollup](https://rollupjs.org/)

build systems: https://yeoman.io/learning/
* [Grunt](http://gruntjs.com/)
* [Gulp](http://gulpjs.com/)

# Server-Side Frameworks
* [Comparison of server-side web frameworks - wikipedia](https://en.wikipedia.org/wiki/Comparison_of_server-side_web_frameworks#JavaScript)


* [Express](./server/Express/Express.md): Fast, unopinionated, minimalist web framework for Node.js.
* [Fastify](https://github.com/fastify/fastify): Fast and low overhead web framework, for Node.js
* [Koa](https://github.com/koajs/koa): Expressive middleware for node.js using ES2017 async functions
* [Meteor](https://github.com/meteor/meteor): Meteor is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes a key set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.
* [Remix](https://github.com/remix-run/remix): Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.
* [Sails.js](https://github.com/balderdashy/sails): Realtime MVC Framework for Node.js
* [Socket.io](https://github.com/socketio/socket.io): Realtime application framework (Node.JS server)
* [SvelteKit](https://github.com/sveltejs/kit): SvelteKit is a framework for rapidly developing robust, performant web applications using Svelte. If you’re coming from React, SvelteKit is similar to *Next*. If you’re coming from Vue, SvelteKit is similar to *Nuxt*.
* [Nest](./server/Nest/Nest.md): A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications with TypeScript/JavaScript.
* [Next.js](./server/Next.js/Next.js.md): Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest **React** features, and integrating powerful **Rust**-based JavaScript tooling for the fastest builds.
* [Nuxt](./server/Nuxt/Nuxt.md): The Progressive Web Framework. Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with Vue.js.
* WebSocket: [ws: a Node.js WebSocket library](https://github.com/websockets/ws)
* [TypeORM](https://github.com/typeorm/typeorm): ORM for TypeScript and JavaScript. Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.
* MySQL: sequelize
* MongoDB: mongoose
* Redis: node-redis
* Kafka: https://cwiki.apache.org/confluence/display/KAFKA/Clients


# Patterns
* [Patterns.dev](https://www.patterns.dev/): Patterns.dev is a free online resource on design, rendering, and performance patterns for building powerful web apps with vanilla JavaScript or modern frameworks.

# See Also
* [Learn web development - MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development)
* [Comparison of JavaScript-based web frameworks - wikipedia](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks)
* [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): a list of all the APIs and interfaces (object types) that you may be able to use while developing your Web app or site.
* [TodoMVC](https://github.com/tastejs/todomvc): **Helping you select a JavaScript framework** - Todo apps for React.js, Angular, Vue and many more.

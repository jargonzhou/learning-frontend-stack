# React
* https://react.dev/
  * versions: https://react.dev/versions
* https://github.com/facebook/react
* https://en.wikipedia.org/wiki/React_(JavaScript_library)

> React is a JavaScript library for building user interfaces.
>
> - **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
> - **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
> - **Learn Once, Write Anywhere**: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

Actions
- [ex-vite-vanilla](./ex-vite-vanilla/README.md): Vite + JavaScript. 'Add React to an Existing Project'
- [ex-vite](./ex-vite/README.md): Vite + React.

# Skaffold

* Creating a React App
  * Full-stack frameworks
    * Next.js App Router
    * React Router
    * Expo: for native apps
  * Other frameworks
    * TanStack Start (Beta)
    * RedwoodSDK
  * Start From Scratch
* Build a React app from Scratch
  * Step 1: Install a build tool
    * [Vite](https://vite.dev/)
    * [Parcel](https://parceljs.org/)
    * [Rsbuild](https://rsbuild.dev/)
  * Step 2: Build Common Application Patterns
    * Routing: [React Router](https://reactrouter.com/start/data/custom), [Tanstack Router](https://tanstack.com/router/latest)
    * Data Fetching: 
      * REST: [TanStack Query](https://tanstack.com/query/), [SWR](https://swr.vercel.app/), [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
      * GraphQL: [Apollo](https://www.apollographql.com/docs/react), [Relay](https://relay.dev/)
    * Code-splitting
      * [Vite build optimizations](https://vite.dev/guide/features.html#build-optimizations)
      * [Parcel code splitting](https://parceljs.org/features/code-splitting/)
      * [Rsbuild code splitting](https://rsbuild.dev/guide/optimization/code-splitting)
    * Improving Application Performance
      * **Single-page apps (SPA)**: load a single HTML page and dynamically updates the page as the user interacts with the app.
      * **Streaming Server-side rendering (SSR)**: renders a page on the server and sends the fully rendered page to the client.
      * **Static site generation (SSG)**: generates static HTML files for your app at build time. 
      * **React Server Components (RSC)**: lets you mix build-time, server-only, and interactive components in a single React tree.
      * target: decrease the time it takes for the first byte of content to be loaded ([Time to First Byte](https://web.dev/articles/ttfb)), the first piece of content to render ([First Contentful Paint](https://web.dev/articles/fcp)), and the largest visible content of the app to render ([Largest Contentful Paint](https://web.dev/articles/lcp))
* Add React to an Existing Project
  * Using React for an entire subroute of your existing website/作为已有站点的整个子路由
  * Using React for a part of your existing page /作为已有页面的一部分
    * Step 1: Set up a modular JavaScript environment 
    * Step 2: Render React components anywhere on the page 
  * Using React Native in an existing native mobile app/原生手机应用

**React Developer Tools**: Use React Developer Tools to inspect React components, edit props and state, and identify performance problems.
- Browser extension
- Mobile (React Native)

## Vite

- Vanilla
  - [ex-vite-vanilla](./ex-vite-vanilla/README.md)
  - [ex-vite-upandrunning](./ex-vite-upandrunning/README.md)
```shell
$ npm create vite@latest
Need to install the following packages:
  create-vite@5.2.3
Ok to proceed? (y)
√ Project name: ... ex-vite-vanilla
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript
$ npm install react react-dom

$ npm create vite@latest ex-vite-upandrunning
Need to install the following packages:
create-vite@8.2.0
Ok to proceed? (y)
> create-vite ex-vite-upandrunning

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript + React Compiler
```

- React template
```shell
✗ npm create vite@latest ex-vite --template react
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

# Reference
* https://react.dev/reference/react
 
version `19.2`

Functions starting with `use` are called *Hooks*.

`key` is a special and reserved property in React. 
When an element is created, React extracts the `key` property and stores the key directly on the returned element. 
Even though `key` may look like it is passed as props, React automatically uses `key` to decide which components to update. 
There’s no way for a component to ask what `key` its parent specified.

## React

Programmatic React features:
- Hooks - Use different React features from your components.
- Components - Built-in components that you can use in your JSX.
- APIs - APIs that are useful for defining components.
- Directives - Provide instructions to bundlers compatible with React Server Components.

### Built-in React Hooks

Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

**State Hooks/状态钩子**: State lets a component **“remember” information like user input**. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
- `useState` declares a state variable that you can update directly.
- `useReducer` declares a state variable with the update logic inside a reducer function/规约函数.

**Context Hooks/上下文钩子**: Context lets a component **receive information from distant parents without passing it as props**. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
- `useContext` reads and subscribes to a context.

**Ref Hooks/引用钩子**: Refs let a component **hold some information that isn’t used for rendering**, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
- `useRef` declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
- `useImperativeHandle` lets you customize the ref exposed by your component. This is rarely used.

**Effect Hooks/作用钩子**: Effects let a component **connect to and synchronize with external systems**. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
- `useEffect` connects a component to an external system.
- `useLayoutEffect` fires before the browser repaints the screen. You can measure layout here.
- `useInsertionEffect` fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

**Performance Hooks/性能钩子**: A common way to optimize re-rendering performance is to **skip unnecessary work**. For example, you can tell React to **reuse a cached calculation** or to **skip a re-render if the data has not changed since the previous render**.
- `useMemo` lets you cache the result of an expensive calculation.
- `useCallback` lets you cache a function definition before passing it down to an optimized component.
- `useTransition` lets you mark a state transition as non-blocking and allow other updates to interrupt it.
- `useDeferredValue` lets you defer updating a non-critical part of the UI and let other parts update first.

**Other Hooks/其他钩子**: These Hooks are mostly useful to library authors and aren’t commonly used in the application code.
- `useDebugValue` lets you customize the label React DevTools displays for your custom Hook.
- `useId` lets a component associate a unique ID with itself. Typically used with accessibility APIs.
- `useSyncExternalStore` lets a component subscribe to an external store.
- `useActionState` allows you to manage state of actions.

**Your own Hooks/自定义钩子**: You can also [define your own custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) as JavaScript functions.

### Built-in React Components
- `<Fragment>`(`<>`)
- `<Profiler>`
- `<StrictMode>`
- `<Suspense>`

### Built-in React APIs
- `cache` Canary
- `createContext`
- `forwardRef`
- `lazy`
- `memo`
- `startTransition`
- `use` Canary
- `experimental_taintObjectReference`
- `experimental_taintUniqueValue`

- `createContext` lets you define and provide context to the child components. Used with `useContext`.
- `lazy` lets you defer loading a component’s code until it’s rendered for the first time.
- `memo` lets your component skip re-renders with same props. Used with `useMemo` and `useCallback`.
- `startTransition` lets you mark a state update as non-urgent. Similar to `useTransition`.
- `act` lets you wrap renders and interactions in tests to ensure updates have processed before making assertions.

Resource APIs: Resources can be accessed by a component without having them as part of their state. For example, a component can read a message from a Promise or read styling information from a context.
- `use` lets you read the value of a resource like a Promise or context.

## React DOM

React DOM contains features that are only supported for web applications (which run in the browser DOM environment).
- Hooks - Hooks for web applications which run in the browser DOM environment.
- Components - React supports all of the browser built-in HTML and SVG components.
- APIs - The `react-dom` package contains methods supported only in web applications.
- Client APIs - The `react-dom/client` APIs let you render React components on the client (in the browser).
- Server APIs - The `react-dom/server` APIs let you render React components to HTML on the server.
- Static APIs - The `react-dom/static` APIs let you generate static HTML for React components.

### Built-in React DOM Hooks
- `useFormStatus`Canary
### React DOM Components
- Common components (e.g. `<div>`)
- `<form>` Canary
- `<input>`
- `<option>`
- `<progress>`
- `<select>`
- `<textarea>`
- `<link>` Canary
- `<meta>` Canary
- `<script>` Canary
- `<style>` Canary
- `<title>` Canary
### React DOM APIs
- `createPortal`
- `flushSync`
- `findDOMNode`
- `hydrate`
- `preconnect` Canary
- `prefetchDNS` Canary
- `preinit` Canary
- `preinitModule` Canary
- `preload` Canary
- `preloadModule` Canary
- `render`
- `unmountComponentAtNode`
### Client React DOM APIs
- `createRoot`
- `hydrateRoot`
### Server React DOM APIs
- `renderToNodeStream`
- `renderToPipeableStream`
- `renderToReadableStream`
- `renderToStaticMarkup`
- `renderToStaticNodeStream`
- `renderToString`

### Static React DOM APIs

## React Compiler

The React Compiler is a build-time optimization tool that automatically memoizes your React components and values:
- Configuration - Configuration options for React Compiler.
- Directives - Function-level directives to control compilation.
- Compiling Libraries - Guide for shipping pre-compiled library code.

## React DevTools
- React Performance tracks

## ESLint Plugin React Hooks

The ESLint plugin for React Hooks helps enforce the Rules of React:
- Lints - Detailed documentation for each lint with examples.

## Rules of React

React has idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications:
- Components and Hooks must be pure – Purity makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.
- React calls Components and Hooks – React is responsible for rendering components and hooks when necessary to optimize the user experience.
- Rules of Hooks – Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

## React Server Components
- Server Components
- Server Functions
- Directives
  - `'use client'` lets you mark what code runs on the client.
  - `'use server'` marks server-side functions that can be called from client-side code.

## Legacy APIs

Exported from the `react` package, but not recommended for use in newly written code.

Legacy APIs
- `Children` lets you manipulate and transform the JSX received as the `children` prop.
- `cloneElement` lets you create a React element using another element as a starting point.
- `Component` lets you define a React component as a JavaScript class.
- `createElement` lets you create a React element. Typically, you’ll use JSX instead.
- `createRef` creates a ref object which can contain arbitrary value.
- `forwardRef` lets your component expose a DOM node to parent component with a ref.
- `isValidElement` checks whether a value is a React element. Typically used with `cloneElement`.
- `PureComponent` is similar to `Component`, but it skip re-renders with same props.

These APIs were removed in React 19:
- `createFactory`: use JSX instead.
- Class Components: `static contextTypes`: use `static contextType` instead.
- Class Components: `static childContextTypes`: use `static contextType` instead.
- Class Components: `static getChildContext`: use `Context` instead.
- Class Components: `static propTypes`: use a type system like TypeScript instead.
- Class Components: `this.refs`: use `createRef` instead.

# See Also
* [Create React App](https://create-react-app.dev/): Create React App has been deprecated. Please visit react.dev for modern options.
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react): React-specific linting rules for ESLint.
* [facebook/prop-types](https://github.com/facebook/prop-types): Runtime type checking for React props and similar objects. - This repository was archived by the owner on Sep 1, 2024. It is now read-only.
* [JSX](https://facebook.github.io/jsx/): JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's **NOT** a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.
  * [HTML to JSX Compiler](https://magic.reactjs.net/htmltojsx.htm)
  * [Babel REPL](https://babeljs.io/repl)
* [MUI Core > Material UI](https://github.com/mui/material-ui): Material UI: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.
* [react-admin](https://github.com/marmelab/react-admin): A frontend Framework for building data-driven applications running on top of REST/GraphQL APIs, using TypeScript, React and Material Design. - https://github.com/marmelab/material-ui-react-admin
* [react-icons](https://github.com/react-icons/react-icons): Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
* [Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial): The Visual Studio Code editor supports React.js IntelliSense and code navigation out of the box.

## Testing
* [Enzyme](https://github.com/enzymejs/enzyme/): Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
* [Jest - Testing React Apps](https://jestjs.io/docs/tutorial-react)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of `react-dom` and `react-dom/test-utils`, in a way that encourages better testing practices.

## Flux
* https://facebookarchive.github.io/flux/
* [In-Depth Overview](https://facebookarchive.github.io/flux/docs/in-depth-overview/)

> Application architecture for building user interfaces
>
> **The Flux project has been archived and no further changes will be made**. 
> We recommend using modern alternatives like Redux, MobX, Recoil, Zustand, or Jotai instead.

Flux libraries:
- Redux
- Flummox
- Fluxxor
- Reflux
- Fluxible
- Lux
- McFly
- MartyJS 

## Redux
* https://redux.js.org/

A JS library for predictable and maintainable global state management
- use a single store
- introduce reducers
- introduce middleware
- actions are decoupled from the store

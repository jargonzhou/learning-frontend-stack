# Vue 2
* https://v2.vuejs.org/
* https://github.com/vuejs/vue
* [Examples](https://v2.cn.vuejs.org/v2/examples/)

> The Progressive JavaScript Framework
>
> Vue (pronounced /vjuː/, like view) is **a progressive framework for building user interfaces**. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.
>
> Vue 2 has reached End of Life on December 31st, 2023.

actions
* [ex-vue2](./ex-vue2/README.md): TypeScript.

# Essentials

topics:
- installation
- introduction
- the `Vue` instance/Vue实例
- template syntax/模板语法
- computed properties/计算属性 and watchers/侦听器
- class and style bindings/绑定
- conditional rendering/条件渲染
- list rendering/列表渲染
- event handling/事件处理
- form input bindings/表单输入绑定
- components basics/组件基础

# Components In-Depth

topics:
- component registration/组件注册
- props
- custom events/自定义事件
- slots/插槽
- dynamic & async components/动态组件 & 异步组件
- handling edge cases/处理边界情况

# Transitions/过渡 & Animation/动画

topics:
- enter/leave & list transitions/进入/离开 & 列表过渡
- state transitions/状态过渡

# Reusability & Composition

topics:
- mixins/混入
- custom directives/自定义指令
- render functions/渲染函数 & JSX
- plugins/插件
- fliters/过滤器

# API
* https://v2.vuejs.org/v2/api/

`vm`: for ViewModel

## Global Config: `Vue.config`
- `silent`: 
- `optionMergeStrategies`: 
- `devtools`: 
- `errorHandler`: 
- `warnHandler`: 
- `ignoredElements`: 
- `keyCodes`: 
- `performance`: 
- `productionTip`: 

## Global API
- `Vue.extend`: 
- `Vue.nextTick`: 
- `Vue.set`: 
- `Vue.delete`: 
- `Vue.directive`: 
- `Vue.filter`: 
- `Vue.component`: 
- `Vue.use`: 
- `Vue.mixin`: 
- `Vue.compile`: 
- `Vue.observable`: 
- `Vue.version`: 

## Options / Data
- `data`: The data object for the Vue instance.
- `props`: A list/hash of attributes that are exposed to accept data from the parent component.
- `propsData`: Pass props to an instance during its creation. This is primarily intended to make unit testing easier.
- `computed`: Computed properties to be mixed into the Vue instance.
- `methods`: Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance, or use them in directive expressions.
- `watch`: An object where keys are expressions to watch and values are the corresponding callbacks.

## Options / DOM
- `el`: Provide the Vue instance an existing DOM element to mount on. It can be a CSS selector string or an actual HTMLElement.
- `template`: 
- `render`: 
- `renderError`: 

## Options / Lifecycle Hooks
- `beforeCreate`: 
- `created`: 
- `beforeMount`: 
- `mounted`: 
- `beforeUpdate`: 
- `updated`: 
- `activated`: 
- `deactivated`: 
- `beforeDestroy`: 
- `destroyed`: 
- `errorCaptured`: 

## Options / Assets
- `directives`: A hash of directives to be made available to the Vue instance.
- `filters`: A hash of filters to be made available to the Vue instance.
- `components`: A hash of components to be made available to the Vue instance.

## Options / Composition
- `parent`: Specify the parent instance for the instance to be created. Establishes a parent-child relationship between the two. The parent will be accessible as `this.$parent` for the child, and the child will be pushed into the parent’s `$children` array.
- `mixins`: The `mixins` option accepts an array of mixin objects. These mixin objects can contain instance options like normal instance objects, and they will be merged against the eventual options using the same option merging logic in `Vue.extend()`. e.g. If your mixin contains a created hook and the component itself also has one, both functions will be called. Mixin hooks are called in the order they are provided, and called before the component’s own hooks.
- `extends`: Allows declaratively extending another component (could be either a plain options object or a constructor) without having to use `Vue.extend`. This is primarily intended to make it easier to extend between single file components.
- `provide / inject`: 

## Options / Misc
- `name`: 
- `delimiters`: 
- `functional`: 
- `model`: 
- `inheritAttrs`: 
- `comments`: 

## Instance Properties
- `vm.$data`: 
- `vm.$props`: 
- `vm.$el`: 
- `vm.$options`: 
- `vm.$parent`: 
- `vm.$root`: 
- `vm.$children`: 
- `vm.$slots`: 
- `vm.$scopedSlots`: 
- `vm.$refs`: 
- `vm.$isServer`: 
- `vm.$attrs`: 
- `vm.$listeners`: 

## Instance Methods / Data
- `vm.$watch`: 
- `vm.$set`: 
- `vm.$delete`: 

## Instance Methods / Events
- `vm.$on`: 
- `vm.$once`: 
- `vm.$off`: 
- `vm.$emit`: 

## Instance Methods / Lifecycle
- `vm.$mount`: If a Vue instance didn’t receive the `el` option at instantiation, it will be in “unmounted” state, without an associated DOM element. `vm.$mount()` can be used to manually start the mounting of an unmounted Vue instance.
- `vm.$forceUpdate`: 
- `vm.$nextTick`: 
- `vm.$destroy`: 

## Directives
- `v-text`: Updates the element’s `textContent`. If you need to update the part of `textContent`, you should use `{{ Mustache }}` interpolations.
- `v-html`: Updates the element’s `innerHTML`. Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates.
- `v-show`: Toggles the element’s `display` CSS property based on the truthy-ness of the expression value.
  - This directive triggers transitions when its condition changes.
- `v-if`: Conditionally render the element based on the truthy-ness of the expression value. The element and its contained directives / components are destroyed and re-constructed during toggles. If the element is a `<template>` element, its content will be extracted as the conditional block.
  - This directive triggers transitions when its condition changes.
- `v-else`: Denote the “else block” for `v-if` or a `v-if`/`v-else-if` chain.
- `v-else-if`: Denote the “else if block” for `v-if`. Can be chained.
- `v-for`: Render the element or template block multiple times based on the source data. The directive’s value must use the special syntax `alias in expression` to provide an alias for the current element being iterated on. Alternatively, you can also specify an alias for the index (or the key if used on an Object).
  - The default behavior of `v-for` will try to patch the elements in-place without moving them. To force it to reorder elements, you need to provide an ordering hint with the `key` special attribute.
- `v-on`: Attaches an event listener to the element. The event type is denoted by the argument. The expression can be a method name, an inline statement, or omitted if there are modifiers present.
  - When used on a normal element, it listens to **native DOM events** only. When used on a custom element component, it listens to **custom events** emitted on that child component.
  - When listening to native DOM events, the method receives the native event as the only argument. If using inline statement, the statement has access to the special `$event` property.
  - modifiers:
    - `.stop`: call event.stopPropagation().
    - `.prevent`: call event.preventDefault().
    - `.capture`: add event listener in capture mode.
    - `.self`: only trigger handler if event was dispatched from this element.
    - `.{keyCode | keyAlias}`: only trigger handler on certain keys.
    - `.native`: listen for a native event on the root element of component.
    - `.once`: trigger handler at most once.
    - `.left`: (2.2.0+) only trigger handler for left button mouse events.
    - `.right`: (2.2.0+) only trigger handler for right button mouse events.
    - `.middle`: (2.2.0+) only trigger handler for middle button mouse events.
    - `.passive`: (2.3.0+) attaches a DOM event with { passive: true }.
- `v-bind`: Dynamically bind one or more attributes, or a component prop to an expression.
- `v-model`: Create a two-way binding on a form input element or a component. 
- `v-slot`: Denote named slots or slots that expect to receive props.
- `v-pre`: Skip compilation for this element and all its children. You can use this for displaying raw mustache tags. Skipping large numbers of nodes with no directives on them can also speed up compilation.
- `v-cloak`: This directive will remain on the element until the associated Vue instance finishes compilation. Combined with CSS rules such as `[v-cloak] { display: none }`, this directive can be used to hide un-compiled mustache bindings until the Vue instance is ready.
- `v-once`: Render the element and component once only. On subsequent re-renders, the element/component and all its children will be treated as static content and skipped. This can be used to optimize update performance.

## Special Attributes
- `key`: The `key` special attribute is primarily used as a hint for Vue’s virtual DOM algorithm to identify VNodes when diffing the new list of nodes against the old list.
- `ref`: `ref` is used to register a reference to an element or a child component. The reference will be registered under the parent component’s `$refs` object. If used on a plain DOM element, the reference will be that element; if used on a child component, the reference will be component instance.
- `is`: Used for dynamic components and to work around limitations of in-DOM templates.
- `slot`: Used on content inserted into child components to indicate which named slot the content belongs to.
  - deprecated: Prefer `v-slot` in 2.6.0+.
- `slot-scope `: Used to denote an element or component as a scoped slot.
  - deprecated: Prefer `v-slot` in 2.6.0+.
- `scope`: Used to denote a `<template>` element as a scoped slot.
  - removed: Replaced by `slot-scope` in 2.5.0+. Prefer `v-slot` in 2.6.0+.

## Built-In Components
- `component`: 
- `transition`: 
- `transition-group`: 
- `keep-alive`: 
- `slot`: 

## VNode Interface

## Server-Side Rendering
 

# Tooling
## Single File Components(SFC)/单文件组件
* https://v2.vuejs.org/v2/guide/single-file-components

## Testing
* https://v2.vuejs.org/v2/guide/testing

topics:
- **Unit Testing/单元测试**
  - Jest
  - Mocha + Chai
- **Component Testing/组件测试**
  - **Vue Testing Library** (`@testing-library/vue`): Vue Testing Library is a set of tools focused on testing components without relying on implementation details. Built with accessibility in mind, its approach also makes refactoring a breeze.
  - **Vue Test Utils**: Vue Test Utils is the official low-level component testing library that was written to provide users access to Vue specific APIs. If you are new to testing Vue applications, we would recommend using Vue Testing Library, which is an abstraction over Vue Test Utils.
- **End-to-End (E2E) Testing/端到端测试**
  - **Cypress.io**: Cypress.io is a testing framework that aims to enhance developer productivity by enabling developers to reliably test their applications while providing a first class developer experience.
  - **Nightwatch.js**: Nightwatch.js is an end-to-end testing framework that can be used to test web applications and websites, as well as Node.js unit and integration testing.
  - **Puppeteer**: Puppeteer is a Node library that provides a high-level API to control the browser and can pair with other test runners (e.g., Jest) to test your application.
  - **TestCafe**: TestCafe is a Node.js based end-to-end framework that aims to provide easy setup so that developers can focus on creating tests that are easy to write and reliable.


## TypeScript Support
* https://v2.vuejs.org/v2/guide/typescript

A static type system can help prevent many potential runtime errors, especially as applications grow. That’s why Vue ships with [official type declarations](https://github.com/vuejs/vue/tree/dev/types) for TypeScript - not only in Vue core, but also for *vue-router* and *vuex* as well.

## Production Deployment
* https://v2.vuejs.org/v2/guide/deployment

# Scaling Up

## Routing/路由

## State Management/状态管理

## Server-Side Rendering/服务端渲染

## Security/安全

# Internals

Reactivity in Depth/深入响应式原理

# Ecosystem
## vue-router
* https://v3.router.vuejs.org/

> Vue Router is the official router for Vue.js (opens new window). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. 

Features:
- Nested route/view mapping
- Modular, component-based router configuration
- Route params, query, wildcards
- View transition effects powered by Vue.js' transition system
- Fine-grained navigation control
- Links with automatic active CSS classes
- HTML5 history mode or hash mode, with auto-fallback in IE9
- Customizable Scroll Behavior

## vuex
* https://vuex.vuejs.org/

> Vuex is a **state management pattern + library** for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

## vue-devtools/Vue Devtools
* https://devtools-v6.vuejs.org/
* https://github.com/vuejs/devtools-v6

> Browser devtools extension for debugging Vue.js applications.
 
## vue-loader/Vue Loader
* https://vue-loader.vuejs.org/

> vue-loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs).

Features
- Allows using other webpack loaders for each part of a Vue component, for example Sass for `<style>` and Pug for `<template>`;
- Allows custom blocks in a `.vue` file that can have custom loader chains applied to them;
- Treat static assets referenced in `<style>` and `<template>` as module dependencies and handle them with webpack loaders;
- Simulate scoped CSS for each component;
- State-preserving hot-reloading during development.

## vue-class-component/Vue Class Component
* https://class-component.vuejs.org/
* https://github.com/vuejs/vue-class-component

> ECMAScript / TypeScript decorator for **class-style Vue components**.
>
> This library is no longer actively maintained. It is no longer recommend to use Class-based components in Vue 3. The recommended way to use Vue 3 in large applications is Single-File Components, Composition API, and `<script setup>`. If you still want to use classes, check out the community-maintained project [vue-facing-decorator](https://facing-dev.github.io/vue-facing-decorator/#/).

## vue-property-decorator
* https://github.com/kaorun343/vue-property-decorator

> Vue.js and Property Decorator
>
> This library is no longer actively maintained. If you still want to use classes, check out the community-maintained project vue-facing-decorator.

## vue-test-utils/Vue Test Utils
* https://v1.test-utils.vuejs.org/
* https://github.com/vuejs/vue-test-utils/

> Vue Test Utils is the official unit testing utility library for Vue.js.

# Tools

## Vue CLI
* https://cli.vuejs.org/
* https://github.com/vuejs/vue-cli

> Vue CLI is now **in maintenance mode**. For new projects, please use `create-vue` to scaffold Vite-based projects. `create-vue` supports both Vue 2 and Vue 3.
>
> Vue CLI is a full system for rapid Vue.js development, providing:
>
> - Interactive project scaffolding via `@vue/cli`.
> - A runtime dependency (`@vue/cli-service`) that is:
>   - Upgradeable;
>   - Built on top of **webpack**, with sensible defaults;
>   - Configurable via **in-project config file**;
>   - Extensible via **plugins**
> - A rich collection of official plugins integrating the best tools in the frontend ecosystem.
> - A full graphical user interface to create and manage Vue.js projects.

```shell
# install
$ npm install -g @vue/cli
$ vue --version
@vue/cli 5.0.9

# create projects
$ vue create my-project
# OR
$ vue ui
```

Components of the System
- CLI: The CLI (`@vue/cli`) is a globally installed npm package and provides the `vue` command in your terminal. It provides the ability to quickly scaffold a new project via `vue create`. You can also manage your projects using a graphical user interface via `vue ui`.
- CLI Service: The CLI Service (`@vue/cli-service`) is a development dependency. It's an npm package installed locally into every project created by `@vue/cli`.
- CLI Plugins: CLI Plugins are npm packages that provide optional features to your Vue CLI projects, such as Babel/TypeScript transpilation, ESLint integration, unit testing, and end-to-end testing.

# See Also
* [awesome-vue](https://github.com/vuejs/awesome-vue): A curated list of awesome things related to Vue.js
* [如何在Vue2中使用TypeScript](https://juejin.cn/post/7157168439528783908)
  * 依赖: Vue 2.6.10 `@vue/cli-plugin-typescript`, `vue-class-component`, `vue-property-decorator`
  * ts声明文件: `shims-vue.d.ts`, `shims.tsx.d.ts`
  * 配置ts: `tsconfig.json`
  * vue-property-decorator: 依赖于vue-class-component
    * `<script lang="ts"> import { Vue, Component } from 'vue-property-decorator' </script>`
    * 生命周期函数
    * data数据: `=`
    * methods方法
    * `@Watch`侦听
    * computed计算属性: `get`
    * `@Component`
    * `@Prop`
    * `@PropSync`
    * `@Ref`
    * `@Emit`
    * `@Model`
    * `@ModelSync`
    * `@VModel`
    * `@Provide`, `@Inject`
    * `@ProvideReaxtive`, `@InjectReactive`
    * `@Mixins`
​
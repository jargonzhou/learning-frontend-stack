# Vue.js: Up and Running

distinguish
- properties/prop: 组件属性; attribute: HTML tag属性

# 1. Vue.js: The Basics
- Why Vue.js?
- Installation and Setup
  - `vue-loader` and `webpack`
- Templates/模板, Data/数据, and Directives/指令
- `v-if` Versus `v-show`
- Looping in Templates: `v-for`
- Binding Arguments/绑定参数
  - `v-bind`: bind a value to an HTML attribute `v-bind:<attr>="value"`, short syntax `:<attr>="value"`
- Reactivity - see also [Reactivity in Depth](https://v2.vuejs.org/v2/guide/reactivity)
  - How It Works
  - Caveats
- Two-Way Data Binding: `v-model`
- Setting HTML Dynamically: `v-html`
- Methods: make functions availbale in templates - `methods`
  - `this`: in a methods, `this` refer to the component that the method is attached to
- Computed Properties: access them as if they were properties of the data object, but they are specified as functions. - `computed`
- Watchers: watch a property of the data object or a computed property for change - `watch`
  - Watching Properties of Objects in the Data Object
  - Getting the Old Value
  - Deep Watching
- Filters: manipulate data in templates. - `filters`, `|`
- Accessing Elements Directly Using `ref`
- Inputs/输入 and Events/事件
  - The `v-on` Shortcut: `@`
  - Event Modifiers
- Life-Cycle Hooks/生命周期钩子
  - `beforeCreate`
  - `created`
  - `beforeMount`
  - `mounted`
  - `beforeUpdate`
  - `updated`
  - `beforeDestroy`
  - `destroyed`
- Custom Directives - `directives`
  - directive hook functions: 
    - `bind`
    - `inserted`
    - `update`
    - `componentUpdated`
    - `unbind`
  - Hook Arguments
- Transitions/过渡 and Animations/动画
  - CSS Transitions
  - JavaScript Animations

# 2. Components in Vue.js
- Component Basics
- Data, Methods, and Computed Properties
- Passing in Data - `props`
  - Prop Validation
  - Casing of Props
  - Reactivity
  - Data Flow and the .sync Modifier
  - Custom Inputs and v-model
- Passing Content into Components with Slots/插槽
  - Fallback Content
  - Named Slots/具名插槽
  - Scoped Slots/作用域插槽
- Custom Events/自定义事件
- Mixins/混入
  - Merging Mixins and Components
- `vue-loader` and `.vue` Files
- Non-prop Attributes
- Components and `v-for`

# 3. Styling with Vue
- Class Binding: `v-bind:class`
- Inline Style Binding: `v-bind:style`
  - Array Syntax
  - Multiple Values
- Scoped CSS with vue-loader: `<stype scoped></style>`
- CSS Modules with vue-loader: `<stype module></style>`, `$style.xxx`
- Preprocessors: `<stype lang="scss" scoped></style>`, `sass-loader`, `node-sass`

# 4. Render Functions and JSX
- The Tag Name
- The Data Object
- Children
- JSX

# 5. Client-Side Routing with vue-router
- Installation
- Basic Usage
- HTML5 History Mode
- Dynamic Routing/动态路由
  - Reacting to Route Updates
  - Passing Params to Components as Props
- Nested Routes/嵌套路由
- Redirect/重定向 and Alias/别名
- Navigation/导航
  - The output Tag
  - Active Class
  - Native Events
  - Programmatic Navigation
- Navigation Guards/导航守卫: `beforeEach`, `afterEach`
  - Per-Route Guards: `beforeEnter`
  - In-Component Guards
- Route Order/路由顺序
  - 404 Pages
- Route Names/路由名称

# 6. State Management with Vuex
- Installation
- Concept
- State/状态 and State Helpers
  - State Helpers
- Getters
  - Getter Helpers
- Mutations
  - Mutation Helpers
  - Mutations Must Be Synchronous
- Actions
  - Action Helpers
  - Destructuring
- Promises and Actions
- Modules
  - File Structure
  - Namespaced Modules

# 7. Testing Vue Components
- Testing a Simple Component
- Introducing vue-test-utils
- Querying the DOM
- mount() Options
- Mocking and Stubbing Data
- Working with Events

# A. Bootstrapping Vue
- vue-cli
- webpack
- pwa
- webpack-simple
- simple
- browserify
- browserify-simple
- Your Own Template
- Nuxt.js

# B. Vue from React
- Getting Started
- Similarities
  - Components
  - Reactivity
  - Life-Cycle Hooks
  - Setting CSS Classes
- Differences
  - Mutation
  - JSX Versus Templates
  - CSS Modules
- Ecosystem
  - Routing: React `react-router`
  - State Management: React `Redux`, `redux-thunk`
  - Unit-Testing Components: React Enzyme

# Vue

- https://vuejs.org/

starter:

```shell
$ npm init vue@latest
┌  Vue.js - The Progressive JavaScript Framework
│
◇  请输入项目名称：
│  learning-vue-app
│
◇  请选择要包含的功能： (↑/↓ 切换，空格选择，a 全选，回车确认)
│  TypeScript, JSX 支持, Router（单页面应用开发）, Pinia（状态管理）, Vitest（单元测试）, ESLint（错误预防）, Prettier（代码格式化）
│
◇  是否引入 Oxlint 以加快检测？（试验阶段）
│  No

正在初始化项目 D:\workspace\github\learning-frontend-stack\vue\learning-vue-app...
│
└  项目初始化完成，可执行以下命令：

   cd learning-vue-app
   npm install
   npm run format
   npm run dev

| 可选：使用以下命令在项目目录中初始化 Git：

   git init && git add -A && git commit -m "initial commit"
```

```shell
$ tree
.
|-- README.md
|-- env.d.ts
|-- eslint.config.ts
|-- index.html
|-- package.json
|-- public
|   `-- favicon.ico
|-- src
|   |-- App.vue
|   |-- assets                               资产: 图片, CSS文件
|   |   |-- base.css
|   |   |-- logo.svg
|   |   `-- main.css
|   |-- components                           组件: 单文件组件SFC(Single File Component)
|   |   |-- HelloWorld.vue
|   |   |-- TheWelcome.vue
|   |   |-- WelcomeItem.vue
|   |   |-- __tests__
|   |   |   `-- HelloWorld.spec.ts
|   |   `-- icons
|   |       |-- IconCommunity.vue
|   |       |-- IconDocumentation.vue
|   |       |-- IconEcosystem.vue
|   |       |-- IconSupport.vue
|   |       `-- IconTooling.vue
|   |-- main.ts                              挂载根组件到HTML DOM, 设置插件和第三方库(例Vue Router, Pinia)
|   |-- router                               路由
|   |   `-- index.ts
|   |-- stores                               全局数据存储: 使用Pinia
|   |   `-- counter.ts
|   `-- views                                绑定到路由的组件
|       |-- AboutView.vue
|       `-- HomeView.vue
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- tsconfig.vitest.json
|-- vite.config.ts
`-- vitest.config.ts
```
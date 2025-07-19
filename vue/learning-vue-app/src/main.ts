import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 应用实例
const app = createApp(App)

// 状态管理
app.use(createPinia())
// 路由管理
app.use(router)

// 挂载到HTML元素上
app.mount('#app')

import Vue from "vue";
// app entry point
import App from "./App.vue";
// ???
import "./registerServiceWorker";
// vue-router
import router from "./router";
// Vuex
import store from "./store";

Vue.config.productionTip = false;

// the root Vue instance
new Vue({
  router,
  store,
  render: (h) => h(App), // createElement
}).$mount("#app");

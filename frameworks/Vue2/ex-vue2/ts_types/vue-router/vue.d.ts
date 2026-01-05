/**
 * Augment/增强 the typings of Vue.js
 */

import Vue from 'vue'
import VueRouter, { Route, NavigationGuard } from './index'

declare module 'vue/types/vue' {
  // add route in Vue instance
  interface Vue {
    $router: VueRouter
    $route: Route
  }
}

declare module 'vue/types/options' {
  // add route in component options
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter
    // in-component guards
    beforeRouteEnter?: NavigationGuard<V>
    beforeRouteLeave?: NavigationGuard<V>
    beforeRouteUpdate?: NavigationGuard<V>
  }
}

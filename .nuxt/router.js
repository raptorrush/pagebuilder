import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d349334 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4a26fb02 = () => interopDefault(import('../pages/_page.vue' /* webpackChunkName: "pages/_page" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3d349334,
    name: "index"
  }, {
    path: "/:page",
    component: _4a26fb02,
    name: "page"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

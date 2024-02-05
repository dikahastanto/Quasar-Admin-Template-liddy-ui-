import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import routes from './routes'
import middleware from './middleware'

const createHistory = process.env.SERVER
  ? createMemoryHistory
  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(
    process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
  )
})

Router.beforeEach(middleware)

export default route(function (/* { store, ssrContext } */) {
  return Router
})

export { Router }

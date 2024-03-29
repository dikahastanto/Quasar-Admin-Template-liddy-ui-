import { RouteRecordRaw } from 'vue-router'
import admin from './admin'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/auth/Login.vue'),
    name: 'loginPage'
  },
  {
    path: '/landingpage',
    component: () => import('pages/landingpage/Index.vue'),
    name: 'landingPage'
  },
  admin,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

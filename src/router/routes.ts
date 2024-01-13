import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/auth/Login.vue')
  },
  {
    path: '/admin/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'dashboardAdmin' }
      },
      {
        path: 'dashboard',
        name: 'dashboardAdmin',
        component: () => import('pages/admin/Index.vue')
      },
      {
        path: 'table',
        name: 'tableAdmin',
        component: () => import('src/pages/admin/table/default/Index.vue')
      },
      {
        path: 'card',
        name: 'cardAdmin',
        component: () => import('src/pages/admin/card/Index.vue')
      },
      {
        path: 'button',
        name: 'buttonAdmin',
        component: () => import('src/pages/admin/button/Index.vue')
      },
      {
        path: 'tab',
        name: 'tabAdmin',
        component: () => import('src/pages/admin/tab/Index.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const Login = () => import('views/login/index.vue')
const Main = () => import('views/main/index.vue')
const NotFound = () => import('views/not-found/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    // 没有登录则去登录页登录
    if (!token) {
      next({ name: 'Login' })
    }
  }

  if (to.path === '/main') {
    next({ path: firstMenu.url })
  }

  next()
})

export default router

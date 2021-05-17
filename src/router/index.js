import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/main'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/search')
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('../views/detail')
      },
      {
        path: 'cate',
        name: 'cate',
        component: () => import('../views/cate')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/chart')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/account')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router

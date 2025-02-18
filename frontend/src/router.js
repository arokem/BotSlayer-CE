import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dataPage'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dataPage',
      name: 'dataPage',
      component: () => import('./views/DataPage.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('./views/Config.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('./views/Help.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'home',
      component: Home,
    }, 
    {
      path: '/interpretation-manager-demo',
      name: 'interpretation-manager-demo',
      component: () => import('@/views/interpretation-manager-demo.vue')
    },
    {
      path: '/interpretation-player-demo',
      name: 'interpretation-player-demo',
      component: () => import('@/views/interpretation-player-demo.vue')
    },
  ]
})
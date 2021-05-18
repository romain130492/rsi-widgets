import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/interpretation-player',
      name: 'interpretation-player',
      component: function (resolve) {
        require(['@/components/interpretation-player.vue'], resolve)
      }
    },
    {
      path: '/interpretation-manager',
      name: 'interpretation-manager',
      component: function (resolve) {
        require(['@/components/interpretation-manager.vue'], resolve)
      }
    },
  ]
})


export default router
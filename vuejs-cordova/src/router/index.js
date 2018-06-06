import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Geek from '@/components/Geek'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: '/geek',
      name: 'geek',
      component: Geek
    }
  ]
})

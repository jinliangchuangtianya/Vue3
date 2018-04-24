import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select'
import Increment from '@/vuexViews/Increment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Increment',
      component: Increment
    },
    {
      path: '/test',
      name: 'Select',
      component: Select
    }
  ]
})

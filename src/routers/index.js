import Vue from 'vue'
import Router from 'vue-router'

const Bubbly = () => import('@/components/bubbly')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/bubbly',
    name: 'bubbly',
    component: Bubbly
  }]
})

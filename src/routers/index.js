import Vue from 'vue'
import Router from 'vue-router'

const Bubbly = () => import('@/components/bubbly')
const Title = () => import('@/components/title')
const Checkbox = () => import('@/components/checkbox')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/bubbly',
    name: 'bubbly',
    component: Bubbly
  }, {
    path: '/title',
    name: 'title',
    component: Title
  }, {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox
  }]
})

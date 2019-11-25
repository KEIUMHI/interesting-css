import Vue from 'vue'
import Router from 'vue-router'

const Bubbly = () => import('@/components/bubbly')
const Title = () => import('@/components/title')
const Checkbox = () => import('@/components/checkbox')
const Taiji = () => import('@/components/taiji')
const Radio = () => import('@/components/radio')
const ColorChange = () => import('@/components/color-change')
const Pie = () => import('@/components/pie')
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
  }, {
    path: '/taiji',
    name: 'taiji',
    component: Taiji
  }, {
    path: '/radio',
    name: 'radio',
    component: Radio
  }, {
    path: '/color-change',
    name: 'color-change',
    component: ColorChange
  }, {
    path: '/pie',
    name: 'pie',
    component: Pie
  }]
})

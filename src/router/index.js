import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Yellow from '../pages/Yellow'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/yellow',
      name: 'Yellow',
      component: Yellow
    }
  ]
})

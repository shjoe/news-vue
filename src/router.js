import Vue from 'vue'
import Router from 'vue-router'
import NewsVue from '@/views/NewsVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsVue',
      component: NewsVue
    }
  ]
})

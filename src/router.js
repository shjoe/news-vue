import Vue from 'vue'
import Router from 'vue-router'
import NewsVue from '@/views/NewsVue'
import TopNews from '@/views/TopNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsVue',
      component: NewsVue
    },
    {
      path: '/topnews',
      name: 'TopNews',
      component: TopNews
    }
  ]
})

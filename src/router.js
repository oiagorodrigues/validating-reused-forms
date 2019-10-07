import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const List = () => import(/* webpackChunkName: "list" */ './views/List.vue')
const New = () => import(/* webpackChunkName: "new" */ './views/New.vue')
const Show = () => import(/* webpackChunkName: "show" */ './views/Show.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: List,
      beforeEnter: (to, from, next) => {
        store.dispatch('getForms')
        next()
      }
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/show/:slug',
      name: 'Show',
      component: Show,
      beforeEnter: (to, from, next) => {
        store.dispatch('getForm', to.params.slug)
        next()
      }
    }
  ]
})

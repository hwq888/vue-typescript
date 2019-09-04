import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/AboutTypeScript',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutTypeScript.vue')
    },
    {
      path: '/typeScript/component',
      name: 'component',
      component: () => import('./views/typeScript/component.vue')
    },
    {
      path: '/typeScript/Provide',
      name: 'component',
      component: () => import('./views/typeScript/Provide.vue')
    },
    {
      path: '/typeScript/Prop',
      name: 'component',
      component: () => import('./views/typeScript/Prop.vue')
    },
    {
      path: '/typeScript/PropSync',
      name: 'component',
      component: () => import('./views/typeScript/PropSync.vue')
    },
    {
      path: '/typeScript/Emit',
      name: 'component',
      component: () => import('./views/typeScript/Emit.vue')
    },
    {
      path: '/typeScript/Mixins',
      name: 'component',
      component: () => import('./views/typeScript/Mixins.vue')
    }
  ]
})

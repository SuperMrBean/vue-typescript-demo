import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // alias: '/',
      path: '/',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ './views/main/index.vue'),
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "module1" */ '@/views/main/Home.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ '@/views/main/About.vue')
        },
        {
          path: 'module1',
          name: 'module1',
          component: () => import(/* webpackChunkName: "module1" */ '@/views/main/module1/index.vue'),
          redirect: 'module1/page1',
          children: [
            {
              path: 'page1',
              name: 'module1-page1',
              component: () => import(/* webpackChunkName: "module1-page1" */ '@/views/main/module1/Page1.vue')
            },
            {
              path: 'page2',
              name: 'module1-page2',
              component: () => import(/* webpackChunkName: "module1-page2" */ '@/views/main/module1/Page2.vue')
            }
          ]
        },
        {
          path: 'module2',
          name: 'module2',
          component: () => import(/* webpackChunkName: "module2" */ '@/views/main/module2/index.vue'),
          redirect: 'module2/page1',
          children: [
            {
              path: 'page1',
              name: 'module2-page1',
              component: () => import(/* webpackChunkName: "module2-page1" */ '@/views/main/module2/Page1.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    { path: '*', redirect: '/' }
  ]
})

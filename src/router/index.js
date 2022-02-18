import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path:'/login',
    name:'login',
    component: ()=> import('@/views/Login/Login')
  },
  // 项目启动默认展示的组件
  {
    path: '/',
    redirect:'login',
    name: 'login',
    component: ()=> import('@/views/Login/Login')
  },
  // 注册组件
  {
    path:'/register',
    name:'register',
    component: ()=> import('@/views/Login/Register')
  },
  // home组件
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

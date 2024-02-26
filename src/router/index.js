import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
const Research = () => import ('../views/Research')
const Team = () => import ('../views/Team')
const Publications = () => import ('../views/Publications')
const Activities = () => import ( '../views/Activities')


Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push方法
// push接受三个参数：配置项、成功回调函数、失败回调函数
VueRouter.prototype.push = function (location, resolve, reject) { // 如果用户自定义了成功回调函数和失败回调函数
  if (resolve && reject) {
    // 直接调用原方法，并传递用户配置的回调函数
    // 注意这里需要把originPush的指向改为VueRouter
    // 使用call方法能够调用函数一次，传递参数使用逗号隔开；apply方法使用数组隔开
    originPush.call(this, location, resolve, reject);
  } else {
    // 如果用户没有自定义回调函数，那么我们手动传入两个空函数
    originPush.call(this, location, () => {}, () => {});
  }
};
//重写replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } 
  else {
    originReplace.call(this, location, () => {}, () => {});
  }
}

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'home',
    component: HomeView
  },
  {
    path: '/research',
    name: 'research',
    component: Research
    // component: () => import('../views/Research.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: Team
    // component: () => import('../views/Team.vue')
  },
  {
    path: '/publications',
    name: 'publications',
    component: Publications
    // component: () => import('../views/Publications.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities
    // component: () => import('../views/Activities.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Research.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router

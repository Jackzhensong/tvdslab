import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'home',
    component: HomeView,
    meta: { title: "TVDS Lab" }
  },
  {
    path: '/research',
    name: 'research',
    // component: Research
    component: () => import('../views/Research.vue'),
    meta: { title: "Research" }
  },
  {
    path: '/team',
    name: 'team',
    // component: Team
    component: () => import('../views/Team.vue'),
    meta: { title: "Team" }
  },
  {
    path: '/publications',
    name: 'publications',
    // component: Publications
    component: () => import('../views/Publications.vue'),
    meta: { title: "Publications" }
  },
  {
    path: '/activities',
    name: 'activities',
    // component: Activities
    component: () => import('../views/Activities.vue'),
    meta: { title: "Activities" }
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: '/',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router

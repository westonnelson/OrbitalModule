import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Maker from '../views/Maker.vue'
import MakerHistory from '../views/MakerHistory.vue'
import Setting from '../views/Setting/index.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { navHide: true },
  },
  {
    path: '/maker',
    name: 'Maker',
    component: Maker,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
  {
    path: '/maker/history',
    name: 'MakerHistory',
    component: MakerHistory,
    meta: { navHide: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

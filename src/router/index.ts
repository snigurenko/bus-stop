import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: { name: 'busLines' }
  },
  {
    path: '/lines',
    name: 'busLines',
    component: () => import("@/pages/BusLinesPage.vue"),
  },
  {
    path: '/stops',
    name: 'busStops',
    component: () => import("@/pages/BusStopPage.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

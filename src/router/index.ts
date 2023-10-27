import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: { name: 'lines' }
  },
  {
    path: '/lines',
    name: 'lines',
    component: () => import("@/views/linesPage.vue"),
  },
  {
    path: '/stops',
    name: 'stops',
    component: () => import("@/views/stopsPage.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

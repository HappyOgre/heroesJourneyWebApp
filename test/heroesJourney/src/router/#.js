import { createRouter } from 'vue-router'

import stats from '@/components/stats.vue'

const routes = [
  { path: '/stats', component: stats, name: stats },
]

const router = createRouter({
  mode: "hash",
  routes
})
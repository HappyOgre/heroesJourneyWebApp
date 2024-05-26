
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Index from '../components/index.vue'
import Stats from '../components/stats.vue'

const routes = [
  {path: "/", 
  component: Index,
  children: [
    {
      path: 'stats',
      component: Stats
    }
  ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router





/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Index from '../components/index.vue'
import Stats from '../components/stats.vue'
import Ruestung from '../components/ruestung.vue'
import Formen from '../components/formen.vue'

const routes = [
  {path: "/", 
  component: Index,
  children: [
    {
      path: 'stats',
      component: Stats
    },
    {
      path: 'ruestung',
      component: Ruestung
    },
    {
      path: 'formen',
      component: Formen
    }
  ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router




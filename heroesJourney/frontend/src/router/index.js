
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Index from '../../src/components/arthania/index.vue'
import Stats from '../../src/components/arthania/stats.vue'
import Ruestung from '../../src/components/arthania/ruestung.vue'
import Formen from '../../src/components/arthania/formen.vue'
import Moveset from '../../src/components/arthania/moveset.vue'
import Klasse from '../../src/components/arthania/klasse.vue'
import Inventar from '../../src/components/arthania/inventar.vue'

const routes = [
  {path: '/', 
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
      },
      {
        path: 'moveset',
        component: Moveset
      },
      {
        path: 'char',
        component: Klasse
      },
      {
        path: 'inventar',
        component: Inventar
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router




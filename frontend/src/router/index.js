
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Index from '../../index.vue'
import Login from '../login.vue'
import arthaniaStats from '../../src/components/arthania/stats.vue'
import arthaniaAusruestung from '../components/arthania/ausruestung.vue'
import arthaniaFormen from '../../src/components/arthania/formen.vue'
import arthaniaMoveset from '../../src/components/arthania/moveset.vue'
import arthaniaKlasse from '../../src/components/arthania/klasse.vue'
import arthaniaInventar from '../../src/components/arthania/inventar.vue'

const routes = [
  {path: '/', 
  component: Index,
    children: [
      {
        path: '/arthania/stats',
        component: arthaniaStats
      },
      {
        path: '/arthania/ausruestung',
        component: arthaniaAusruestung
      },
      {
        path: '/arthania/formen',
        component: arthaniaFormen
      },
      {
        path: '/arthania/moveset',
        component: arthaniaMoveset
      },
      {
        path: '/arthania/char',
        component: arthaniaKlasse
      },
      {
        path: '/arthania/inventar',
        component: arthaniaInventar
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router




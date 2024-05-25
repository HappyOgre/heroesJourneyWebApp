
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

import index from '../components/index.vue'
import stats from '../components/stats.vue'


const routes = [
  {path: '/', component: index},
  {path: '/stats', component: stats}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default {name:'router'}


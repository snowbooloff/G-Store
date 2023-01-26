import { createRouter, createWebHistory } from 'vue-router'

import Discover from '../pages/DiscoverPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../pages/ExplorePage.vue')
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../pages/GamePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('../pages/NotFound.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../pages/FavoritesPage.vue')
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../pages/ShoppingPage.vue')
    }
  ]
})

export default router

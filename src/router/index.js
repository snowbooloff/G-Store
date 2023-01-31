import { createRouter, createWebHistory } from 'vue-router'

import Discover from '../views/DiscoverView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/ShoppingView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/signUp',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../views/GameView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('../views/ErrorView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    }
  ]
})

export default router

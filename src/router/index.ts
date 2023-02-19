import { createRouter, createWebHistory } from 'vue-router'

//Views
import Discover from '@/views/DiscoverView.vue'

//Utils
import loadingLayout from '@/router/loadingLayouts'
import { authenticationUser } from '@/router/authenticationUser'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover,
      meta: {
        layoutName: 'GameLayout'
      }
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/ExploreView.vue'),
      meta: {
        layoutName: 'GameLayout'
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/FavoritesView.vue'),
      meta: {
        layoutName: 'GameLayout'
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/views/ShoppingView.vue'),
      meta: {
        layoutName: 'GameLayout'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/authViews/RegisterView.vue'),
      meta: {
        layoutName: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/authViews/LoginView.vue'),
      meta: {
        layoutName: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('@/views/authViews/ResetView.vue'),
      meta: {
        layoutName: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: {
        layoutName: 'UserLayout',
        access: 'auth only'
      }
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('@/views/GameView.vue'),
      meta: {
        layoutName: 'GameLayout'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('@/views/ErrorView.vue'),
      meta: {
        layoutName: 'GameLayout'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuth: object | null = await authenticationUser()

  const firstCondition = to.meta.access == 'auth only' && !isAuth
  const secondCondition = to.meta.access == 'no auth' && isAuth

  if (firstCondition || secondCondition) {
    next({ name: 'discover' })
  } else {
    next()
  }
})

router.beforeEach(loadingLayout)

export default router

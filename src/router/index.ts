import { createRouter, createWebHistory } from 'vue-router'

//Views
import Discover from '../views/DiscoverView.vue'

//Utils
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      path: '/register',
      name: 'register',
      component: () => import('../views/authViews/RegisterView.vue'),
      meta: {
        layout: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authViews/LoginView.vue'),
      meta: {
        layout: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('../views/authViews/ResetView.vue'),
      meta: {
        layout: 'AuthLayout',
        access: 'no auth'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      meta: {
        layout: 'UserLayout',
        access: 'auth only'
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

type user = object | null

function getCurrentUser(): Promise<user> {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(getAuth(), (user) => resolve(user), reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const isAuth: user = await getCurrentUser()
  const firstCondition = to.meta.access == 'auth only' && !isAuth
  const secondCondition = to.meta.access == 'no auth' && isAuth
  if (firstCondition || secondCondition) {
    next({ name: 'discover' })
  } else {
    next()
  }
})

export default router

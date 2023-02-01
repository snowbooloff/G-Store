import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const userModule = {
  namespaced: true,
  state: () => ({
    isAuth: false
  }),
  getters: {},
  mutations: {
    setAuth(state, authValue) {
      state.isAuth = authValue
    }
  },
  actions: {
    async checkAuth({ state, commit }) {
      const auth = getAuth()
      await onAuthStateChanged(auth, (user) => {
        user ? commit('setAuth', true) : commit('setAuth', false)
      })
    }
  }
}

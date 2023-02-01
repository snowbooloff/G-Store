import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

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
    checkAuth({ state, commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        user ? commit('setAuth', true) : commit('setAuth', false)
      })
    },
    signOut({ state, commit }) {
      const auth = getAuth()
      signOut(auth)
    }
  }
}

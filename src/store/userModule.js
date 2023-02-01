import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export const userModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    userInfo: {
      nickname: '',
      email: '',
      profilePic: ''
    }
  }),
  getters: {},
  mutations: {
    setAuth(state, authValue) {
      state.isAuth = authValue
    },
    setUserInfo(state, value) {
      state.userInfo.nickname = value.displayName
      state.userInfo.email = value.email
      state.userInfo.profilePic = value.profilePic
    }
  },
  actions: {
    checkAuth({ state, commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setAuth', true)
          commit('setUserInfo', user)
        }
      })
    },
    signOut({ state, commit }) {
      const auth = getAuth()
      signOut(auth)
      commit('setAuth', false)
    }
  }
}

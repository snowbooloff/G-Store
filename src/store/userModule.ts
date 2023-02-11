import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import { Commit } from 'vuex'

interface userState {
  isAuth: boolean
  userInfo: {
    nickname: string
    email: string
    image: string
    registrationDate: string
  }
}

export const userModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    userInfo: {
      nickname: '',
      email: '',
      image: '',
      registrationDate: ''
    }
  }),
  mutations: {
    setAuth(state: userState, authValue: boolean) {
      state.isAuth = authValue
    },
    setUserNickname(state: userState, nickname: string) {
      state.userInfo.nickname = nickname
    },
    setUserEmail(state: userState, email: string) {
      state.userInfo.email = email
    },
    setUserImage(state: userState, picUrl: string) {
      state.userInfo.image = picUrl
    },
    setUserRegDate(state: userState, date: string) {
      state.userInfo.registrationDate = date
    }
  },
  actions: {
    checkAuth({ state, commit }: { state: userState; commit: Commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setAuth', true)
          commit('setUserNickname', user.displayName)
          commit('setUserImage', user.photoURL)
          commit('setUserEmail', user.email)
          commit('setUserRegDate', user.metadata.creationTime)
        }
      })
    },
    signOut({ state, commit }: { state: userState; commit: Commit }) {
      const auth = getAuth()
      signOut(auth).then(() => {
        commit('setAuth', false)
        commit('setUserNickname', '')
        commit('setUserImage', '')
        commit('setUserEmail', '')
        commit('setUserRegDate', '')
      })
    }
  }
}

import { getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'

export const userModule = {
  namespaced: true,
  state: () => ({
    isAuth: false,
    userInfo: {
      nickname: '',
      email: '',
      image: ''
    }
  }),
  getters: {},
  mutations: {
    setAuth(state, authValue) {
      state.isAuth = authValue
    },
    setUserNickname(state, nickname) {
      state.userInfo.nickname = nickname
    },
    setUserEmail(state, email) {
      state.userInfo.email = email
    },
    setUserPic(state, picUrl) {
      state.userInfo.image = picUrl
    }
  },
  actions: {
    checkAuth({ state, commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setAuth', true)
          commit('setUserNickname', user.displayName)
          commit('setUserPic', user.photoURL)
          commit('setUserEmail', user.email)
        }
      })
    },
    signOut({ state, commit }) {
      const auth = getAuth()
      signOut(auth).then(() => {
        commit('setAuth', false)
        commit('setUserNickname', '')
        commit('setUserPic', '')
        commit('setUserEmail', '')
      })
    },
    uploadUserPic({ state, commit }, userPic) {
      if (userPic) {
        const auth = getAuth()
        const storage = getStorage()
        console.log(auth)
        const pictureRef = ref(storage, `userAvatars/${auth.currentUser.uid}/avatar`)

        uploadBytes(pictureRef, userPic).then(() => {
          getDownloadURL(pictureRef).then((url) => {
            updateProfile(auth.currentUser, {
              photoURL: url
            })
            commit('setUserPic', url)
          })
        })
      }
    }
  }
}

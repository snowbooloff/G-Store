import { getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'

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
      state.userInfo.profilePic = value.photoURL
    },
    setUserPic(state, picUrl) {
      state.userInfo.profilePic = picUrl
    }
  },
  actions: {
    checkAuth({ state, commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setAuth', true)
          commit('setUserInfo', user)
          console.log(auth)
        }
      })
    },
    signOut({ state, commit }) {
      const auth = getAuth()
      signOut(auth)
      commit('setAuth', false)
    },
    signOut({ state, commit }) {
      const auth = getAuth()
      signOut(auth)
      commit('setAuth', false)
    },
    uploadUserPic({ state, commit }, userPic) {
      if (userPic) {
        const auth = getAuth()
        const storage = getStorage()
        const pictureRef = ref(storage, `userAvatars/${auth.currentUser.uid}/${userPic.name}`)

        uploadBytes(pictureRef, userPic).then(() => {
          console.log('img uploaded')
        })
        getDownloadURL(pictureRef).then((url) => {
          updateProfile(auth.currentUser, {
            photoURL: url
          })
          commit('setUserPic', url)
        })
      }
    }
  }
}

import { createStore } from 'vuex'
import { userModule } from './userModule'
import { notificationModule } from './notificationModule'
import { loadingModule } from './loadingModule'

import axios from 'axios'

export default createStore({
  state: {
    genresList: []
  },
  getters: {},
  mutations: {
    setGenresList(state, value) {
      state.genresList = value
    }
  },
  actions: {
    async fetchGenres({ state, commit }) {
      try {
        const response = await axios.get('https://api.rawg.io/api/genres?', {
          params: {
            key: '6be3bec5eec246719e96cc8c4b02ca8f',
            page_size: 12
          }
        })
        commit('setGenresList', response.data.results)
      } catch (error) {
        console.warn(error)
      }
    }
  },
  modules: {
    user: userModule,
    notification: notificationModule,
    loading: loadingModule
  }
})

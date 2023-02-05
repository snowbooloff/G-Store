import axios from 'axios'
import { Commit } from 'vuex'

type genresState = { genresList: object[] }

export const genresModule = {
  namespaced: true,
  state: () => ({
    genresList: []
  }),
  mutations: {
    setGenresList(state: genresState, value: object[]) {
      state.genresList = value
    }
  },
  actions: {
    async fetchGenres({ state, commit }: { state: genresState; commit: Commit }) {
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
  }
}

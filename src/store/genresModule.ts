import axios from 'axios'
import { Commit } from 'vuex'
import { key } from '../api/rawg'

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
            key: key,
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

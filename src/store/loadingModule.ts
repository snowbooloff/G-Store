type loadingState = { isLoading: boolean }

export const loadingModule = {
  namespaced: true,
  state: () => ({
    isLoading: false
  }),
  mutations: {
    setLoading(state: loadingState, loadingStatus: boolean) {
      state.isLoading = loadingStatus
    }
  }
}

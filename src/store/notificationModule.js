export const notificationModule = {
  namespaced: true,
  state: () => ({
    notificationList: []
  }),
  getters: {},
  mutations: {
    pushNotification(state, newNotification) {
      state.notificationList.push(newNotification)
    },
    removeNotification(state) {
      state.notificationList.splice(0, 1)
    }
  },
  actions: {}
}

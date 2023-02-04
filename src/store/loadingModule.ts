type notificationState = { notificationList: string[] }

export const notificationModule = {
  namespaced: true,
  state: () => ({
    notificationList: []
  }),
  mutations: {
    pushNotification(state: notificationState, newNotification: string): void {
      state.notificationList.push(newNotification)
    },
    removeNotification(state: notificationState) {
      state.notificationList.splice(0, 1)
    }
  }
}

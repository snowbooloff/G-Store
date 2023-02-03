interface notificationState {
  notificationList: [string]
}

export const notificationModule = {
  namespaced: true,
  state: (): notificationState => ({
    notificationList: []
  }),
  mutations: {
    pushNotification(state: object, newNotification: string): void {
      state.notificationList.push(newNotification)
    },
    removeNotification(state: object) {
      state.notificationList.splice(0, 1)
    }
  }
}

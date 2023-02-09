import { createStore, Store } from 'vuex'

import { userModule } from './userModule'
import { notificationModule } from './notificationModule'
import { loadingModule } from './loadingModule'
import { genresModule } from './genresModule'

declare module '@vue/runtime-core' {
  interface State {
    modules: object
  }
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  modules: {
    user: userModule,
    notification: notificationModule,
    loading: loadingModule,
    genres: genresModule
  }
})

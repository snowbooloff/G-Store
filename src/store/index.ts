import { createStore, Store } from 'vuex'

import { userModule } from '@/store/userModule'
import { notificationModule } from '@/store/notificationModule'
import { loadingModule } from '@/store/loadingModule'
import { genresModule } from '@/store/genresModule'

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

import { createStore } from 'vuex'
import { userModule } from './userModule'
import { notificationModule } from './notificationModule'
import { loadingModule } from './loadingModule'
import { genresModule } from './genresModule'

export default createStore({
  modules: {
    user: userModule,
    notification: notificationModule,
    loading: loadingModule,
    genres: genresModule
  }
})

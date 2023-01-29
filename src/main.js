import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

//UI Components
import ComponentsUI from './components/ui'

//Icons Components
import ComponentsIcons from './components/icons'

//Directives
import Intersection from './directives/Vintersection'

import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDraHn-WZ632cl6lPtJlsinpvEPj4qIxxo',
  authDomain: 'gstore-buy-4d273.firebaseapp.com',
  projectId: 'gstore-buy-4d273',
  storageBucket: 'gstore-buy-4d273.appspot.com',
  messagingSenderId: '658773696495',
  appId: '1:658773696495:web:4a63ff491da071945be01a',
  databaseURL: 'https://gstore-buy-4d273-default-rtdb.europe-west1.firebasedatabase.app/'
}

const FireBaseApp = initializeApp(firebaseConfig)
const database = getDatabase(FireBaseApp)

const app = createApp(App)

ComponentsUI.forEach((element) => {
  app.component(element.name, element.component)
})

ComponentsIcons.forEach((element) => {
  app.component(element.name, element.component)
})

app.directive('intersection', Intersection).use(store).use(router).mount('#app')

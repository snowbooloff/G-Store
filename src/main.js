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

const app = createApp(App)

ComponentsUI.forEach((element) => {
  app.component(element.name, element.component)
})

ComponentsIcons.forEach((element) => {
  app.component(element.name, element.component)
})

app.directive('intersection', Intersection).use(store).use(router).mount('#app')

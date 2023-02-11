import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store/index'
import router from '@/router'

//UI Components
import ComponentsUI from '@/components/UI'

//Icons Components
import ComponentsIcons from '@/components/icons'

//Directives
import Intersection from '@/directives/Vintersection'
import Focus from '@/directives/Vfocus'

//Firebase
import '@/api/firebase'

const app = createApp(App)

ComponentsUI.forEach((element) => {
  app.component(element.name, element.component)
})

ComponentsIcons.forEach((element) => {
  app.component(element.name, element.component)
})

app
  .directive('intersection', Intersection)
  .directive('focus', Focus)
  .use(store)
  .use(router)
  .mount('#app')

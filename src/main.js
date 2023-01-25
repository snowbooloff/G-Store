import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "@/router/router.js";

//UI components
import componentsUI from "@/components/UI";

//UI Directives
import Intersection from "@/directives/Vintersection.js";

const app = createApp(App);

componentsUI.forEach((element) => {
  app.component(element.name, element);
});

app
  .directive("intersection", Intersection)
  .use(store)
  .use(router)
  .mount("#app");

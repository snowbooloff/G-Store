import Discover from "@/pages/DiscoverPage.vue";
import Explore from "@/pages/ExplorePage.vue";
import Game from "@/pages/GamePage.vue";
import NotFound from "@/pages/NotFound.vue";
import Favorites from "@/pages/FavoritesPage.vue";
import Shopping from "@/pages/ShoppingPage.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "discover",
    component: Discover,
  },
  {
    path: "/explore",
    name: "explore",
    component: Explore,
  },
  {
    path: "/game/:id",
    name: "game",
    component: Game,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: NotFound,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/shopping",
    name: "shopping",
    component: Shopping,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;

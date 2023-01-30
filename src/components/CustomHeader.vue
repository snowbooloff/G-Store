<script setup>
import { ref } from 'vue'

const menuIsActive = ref(false)
</script>

<template>
  <div class="header container flex flex_space-between">
    <div class="logo flex flex_align-center main-black cursor-pointer" @click="$router.push('/')">
      <icon-logo class="logo__icon icon" />
      <p class="logo__title no-copy">GStore</p>
    </div>

    <nav class="nav-bar flex flex_align-center no-copy">
      <router-link class="nav-bar__link main-black" to="/"> Discover </router-link>

      <router-link class="nav-bar__link main-black" to="/explore"> Explore </router-link>

      <router-link to="/favorites" class="nav-bar__link icon main-black">
        <component :is="$route.name == 'favorites' ? 'icon-like-active' : 'icon-like'" />
      </router-link>

      <router-link to="/shopping" class="nav-bar__link icon main-black">
        <component :is="$route.name == 'shopping' ? 'icon-cart-active' : 'icon-cart'" />
      </router-link>

      <div
        class="user flex flex_align-center cursor-pointer main-black"
        @click.stop="menuIsActive = !menuIsActive"
      >
        <icon-user class="user__avatar icon main-white" />
        <p class="user__text">Sign In</p>
        <icon-arrow class="user__arrow icon" />
        <v-modal-window class="user__menu" v-model="menuIsActive" v-if="menuIsActive">
          <router-link class="user__bttn main-black" to="/signup">Sign Up</router-link>
          <router-link class="user__bttn main-black" to="/signup">Sign In</router-link>
        </v-modal-window>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--main-white);
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
}

.logo__title {
  font-weight: 700;
  line-height: 1;
}

.icon {
  height: 20px;
  width: 20px;
}

.nav-bar {
  gap: var(--medium-spacing);
}

.nav-bar__link {
  text-decoration: none;
}
.router-link-active {
  color: var(--main-blue);
}
.user__text {
  margin-left: var(--small-spacing);
}

.user__avatar {
  width: 30px;
  height: 30px;
  padding: var(--small-spacing);
  border-radius: 50%;
  background-color: var(--second-white);
  border: 2px solid var(--main-blue);
}
.user__menu {
  position: absolute;
  top: 100%;
  border-top: 2px solid var(--second-white);
  background-color: var(--main-white);
  padding: var(--medium-spacing) var(--large-spacing);
  text-align: center;
}
.user__bttn {
  display: block;
  margin-bottom: var(--medium-spacing);
  text-decoration: none;
}
.user__bttn:last-child {
  margin-bottom: 0;
}
</style>

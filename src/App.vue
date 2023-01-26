<template>
  <div id="modals"></div>
  <custom-header />
  <main>
    <router-view />
  </main>
</template>

<script setup>
//Components
import CustomHeader from './components/CustomHeader.vue'

//Utils
import { useStore } from 'vuex'

const store = useStore()

store.dispatch('fetchGenres')
</script>

<style>
@import url('./assets/normalize.css');
@import url('./assets/roots.css');
@import url('./assets/flex-box.css');
@import url('./assets/buttons.css');

body {
  background-color: var(--main-black);
}

#modals {
  position: fixed;
  z-index: 999;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-flow: column;
  gap: var(--medium-spacing);
}

#app {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
}

.main-white {
  color: var(--main-white);
}

.second-white {
  color: var(--second-white);
}

.main-black {
  color: var(--main-black);
}

.main-blue {
  color: var(--main-blue);
}

.cursor-pointer:hover {
  cursor: pointer;
}

.no-copy {
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.pt-48px {
  padding-top: 48px !important;
}

.pt-64px {
  padding-top: 64px !important;
}

.container {
  padding: 0 2vw 0 2vw;
}

.large-container {
  padding: 0 10vw 0 10vw;
}
</style>

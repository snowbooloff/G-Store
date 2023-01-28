<template>
  <div id="modals"></div>
  <header>
    <custom-header />
  </header>
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
@import url('./assets/main.css');
@import url('./assets/buttons.css');

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>

<template>
  <notification />
  <header>
    <custom-header />
  </header>
  <main>
    <AppLayout />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

//Components
import CustomHeader from './components/CustomHeader.vue'
import Notification from './components/Notification.vue'
import AppLayout from './layouts/AppLayout.vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  store.dispatch('genres/fetchGenres')
  store.dispatch('user/checkAuth')
})
</script>

<style>
@import url('./assets/main.css');
@import url('./assets/buttons.css');

header {
  margin-bottom: 48px;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>

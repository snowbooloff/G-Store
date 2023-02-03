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
import Notification from './components/Notification.vue'
import CustomHeader from './components/CustomHeader.vue'
import AppLayout from './layouts/AppLayout.vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  store.dispatch('fetchGenres')
  store.dispatch('user/checkAuth')
})
</script>

<style>
@import url('./assets/main.css');
@import url('./assets/buttons.css');

header {
  margin-bottom: 48px;
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

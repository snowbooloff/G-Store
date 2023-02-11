<template>
  <notification :delay="2500" />
  <header>
    <custom-header />
  </header>
  <main>
    <AppLayout />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

//Components
import CustomHeader from '@/components/CustomHeader.vue'
import Notification from '@/components/Notification.vue'
import AppLayout from '@/layouts/AppLayout.vue'

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

#app {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: calc(10px + (20 - 10) * ((100vh - 250px) / (1440 - 250)));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>

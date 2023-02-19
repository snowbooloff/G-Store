<script setup lang="ts">
import { watch } from 'vue'

//Utils
import { useRoute } from 'vue-router'
const route = useRoute()

watch(route, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <component
    :is="route.meta.layoutComponent"
    :class="[$route.name !== 'game' ? 'container page_padding' : '', 'page']"
  >
    <router-view />
  </component>
</template>

<style>
.page {
  gap: var(--extra-large-spacing);
  margin-bottom: var(--extra-large-spacing);
}
.page_padding {
  padding-top: 16px !important;
}
.page-block {
  gap: var(--medium-spacing);
}
</style>

<script setup>
//Components
import PageLoader from '../components/PageLoader.vue'
</script>

<template>
  <div class="page container pt-16px flex flex_column">
    <slot></slot>
  </div>
  <page-loader v-if="$store.state.isLoading" />
</template>

<style scoped>
.page {
  min-height: calc(100vh - 40px);
  gap: var(--extra-large-spacing);
  margin-bottom: var(--extra-large-spacing);
}
.pt-16px {
  padding-top: 16px !important;
}
</style>

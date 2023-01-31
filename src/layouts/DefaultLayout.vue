<script setup>
//Components
import PageLoader from '../components/PageLoader.vue'
</script>

<template>
  <div class="flex flex_column" v-bind="$attrs">
    <slot></slot>
  </div>
  <page-loader v-if="$store.state.isLoading" />
</template>

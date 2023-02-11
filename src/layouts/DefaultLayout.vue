<script setup lang="ts">
import { computed } from 'vue'

//Components
import PageLoader from '../components/PageLoader.vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

const loading = computed<boolean>(() => store.state.loading.isLoading)
</script>

<template>
  <div
    class="flex flex_column"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
  <page-loader v-if="loading" />
</template>

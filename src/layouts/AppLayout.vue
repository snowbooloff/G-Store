<script setup lang="ts">
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `../layouts/${metaLayout}.vue`))
      layout.value = markRaw(component?.default)
    } catch (e) {}
  },
  { immediate: true }
)
watch(route, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <component
    :is="layout"
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

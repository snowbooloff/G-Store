<script setup lang="ts">
import { watch } from 'vue'
const props = defineProps<{
  errorText: string
  delay: number
}>()

const emit = defineEmits(['update:errorText'])

watch(props, (newValue) => {
  if (newValue.errorText) {
    setTimeout(() => emit('update:errorText', ''), 1500)
  }
})
</script>

<template>
  <p
    class="error-info"
    v-show="errorText.length"
  >
    {{ errorText }}
  </p>
</template>

<style scoped>
.error-info {
  text-align: center;
  color: #d00000;
}
</style>

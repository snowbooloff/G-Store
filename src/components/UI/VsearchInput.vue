<script setup lang="ts">
import { ref } from 'vue'

const prop = defineProps<{
  modelValue: string | null
}>()
const emit = defineEmits(['update:modelValue'])

let delayTime: number

const debouncedValue = ref('')

const debounceListener = (event: Event) => {
  if (!!delayTime) {
    clearTimeout(delayTime)
  }

  delayTime = window.setTimeout(() => {
    debouncedValue.value = (event.target as HTMLInputElement).value
    emit('update:modelValue', debouncedValue.value)
  }, 800)
}
</script>

<template>
  <div class="search">
    <v-input
      class="search__input main-black"
      v-bind:modelValue="modelValue"
      :value="modelValue"
      @input="debounceListener"
      v-bind="$attrs"
    />
    <icon-search class="search__icon main-black"></icon-search>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  position: relative;
}
.search__input {
  padding: 8px 8px 8px 32px;
}

.search__icon {
  position: absolute;
  padding: 8px;
  height: 100%;
  width: 32px;
  left: 0;
}
</style>

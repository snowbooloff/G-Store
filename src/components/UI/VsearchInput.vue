<script setup>
import { ref } from 'vue'
const prop = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

let delayTime

const debouncedValue = ref('')

const debounceListener = (e) => {
  if (!!delayTime) {
    clearTimeout(delayTime)
  }

  delayTime = setTimeout(() => {
    debouncedValue.value = e.target.value
    emit('update:modelValue', debouncedValue.value)
  }, 800)
}
</script>

<template>
  <input class="search-input main-black" :value="modelValue" @input="debounceListener" />
</template>

<style scoped>
.search-input {
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  padding: 8px 8px 8px 32px;
  line-height: 14px;
  /* background: url('@/assets/icons/search.svg') no-repeat scroll 12px; */
  background-size: 14px;
  background-color: var(--main-white);
  outline: none;
  border: none;
}
</style>

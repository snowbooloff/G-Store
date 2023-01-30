<script setup>
import { ref } from 'vue'
const prop = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const icon = '../icons/IconSearch.vue'

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
  <div class="search">
    <input
      class="search__input main-black"
      :value="modelValue"
      @input="debounceListener"
      v-bind="$attrs"
    />
    <icon-search class="search-icon main-black"></icon-search>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  position: relative;
}
.search__input {
  width: 100%;
  border-radius: 10px;
  padding: 8px 8px 8px 32px;
  line-height: 14px;
  outline: none;
  border: none;
}
.search-icon {
  position: absolute;
  padding: 8px;
  height: 100%;
  width: 32px;
  left: 0;
}
</style>

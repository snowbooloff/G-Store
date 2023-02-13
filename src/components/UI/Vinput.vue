<script setup lang="ts">
defineProps(['modelValue'])
</script>

<template>
  <input
    class="input main-black"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.input {
  width: 100%;
  border-radius: 10px;
  padding: 8px;
  background-color: var(--main-white);
  outline: none;
  border: none;
  font-size: 16px;
  line-height: 1;
}
.input:focus-visible {
  box-shadow: 0px 0px 6px var(--main-white);
}
</style>

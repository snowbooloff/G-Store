<script setup lang="ts">
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function updateValue(Event: Event) {
  emit('update:modelValue', (Event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    class="input main-black"
    :value="modelValue"
    @input="updateValue"
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
  font-size: 0.875em;
  line-height: 1;
}
.input:focus {
  box-shadow: 0px 0px 6px var(--main-white);
}
</style>

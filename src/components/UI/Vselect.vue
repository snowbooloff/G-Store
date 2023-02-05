<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  options: [{ value: string; name: string }]
}>()

const emit = defineEmits(['update:modelValue'])

function updateValue(Event: Event) {
  emit('update:modelValue', (Event.target as HTMLInputElement).value)
}
</script>

<template>
  <select
    class="select main-white"
    :value="modelValue"
    @change="updateValue"
  >
    <option
      class="second-white"
      value=""
    >
      <slot></slot>
    </option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.select {
  padding: 0.2em;
  background-color: var(--second-black);
  border-radius: 5px;
  border: 1px solid var(--main-white);
}
</style>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <select
    class="select main-white"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option class="second-white" value="">
      <slot></slot>
    </option>
    <option v-for="option in options" :key="option.value" :value="option.value">
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

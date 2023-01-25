<script>
export default {
  name: 'c-input',
};
</script>

<script setup>
const prop = defineProps(['modelValue']);
</script>

<template>
  <input
    class="input main-black"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.input {
  border-radius: 10px;
  font-size: 14px;
  padding: 8px;
  line-height: 14px;
  outline: none;
  border: none;
}
</style>

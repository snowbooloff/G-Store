<script setup>
const prop = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  }
})
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
  width: 100%;
  border-radius: 10px;
  padding: 8px;
  outline: none;
  border: none;
  font-size: 0.875em;
  line-height: 1;
}
.input:focus {
  box-shadow: 0px 0px 6px var(--main-white);
}
</style>

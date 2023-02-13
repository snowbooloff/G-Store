<script setup lang="ts">
// TS Interfaces
import { ISelectOptions } from '@/ts/selectOptions.interface'

defineProps<{
  modelValue: string
  options: ISelectOptions[]
}>()
</script>

<template>
  <select
    class="select main-white"
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
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

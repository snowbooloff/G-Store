<script setup lang="ts">
import { shallowRef } from 'vue'
defineProps(['modelValue'])

const showPassowrd = shallowRef(false)
</script>

<template>
  <div class="password">
    <v-input
      class="password__input"
      v-bind:modelValue="modelValue"
      :type="showPassowrd ? 'text' : 'password'"
      v-bind="$attrs"
    />
    <icon-eye
      class="password__icon"
      :class="showPassowrd ? 'main-blue' : 'main-black'"
      @click="showPassowrd = !showPassowrd"
    />
  </div>
</template>

<style scoped>
.password {
  position: relative;
}
.password__input {
  padding: 8px 32px 8px 8px;
}
.password__icon {
  position: absolute;
  cursor: pointer;
  padding: 8px;
  height: 100%;
  width: 32px;
  right: 0;
}
</style>

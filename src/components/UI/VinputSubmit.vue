<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  submitFunc: Function
  funcArguments?: {}
}>()
</script>

<template>
  <div class="input">
    <v-input
      class="input_text"
      v-bind:modelValue="modelValue"
      v-bind="$attrs"
    />
    <input
      class="input__submit cursos-pointer"
      type="submit"
      value="SUBMIT"
      @click.stop="submitFunc(funcArguments)"
      v-show="modelValue.length"
    />
  </div>
</template>

<style scoped>
.input {
  position: relative;
  width: 100%;
}

.input__submit {
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 var(--small-radius) var(--small-radius) 0;
  background-color: var(--second-white);
  color: var(--second-black);
  cursor: pointer;
  line-height: 1;
  border: none;
  padding: 8px;
}
</style>

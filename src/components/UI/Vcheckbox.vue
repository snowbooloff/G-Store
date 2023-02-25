<script setup lang="ts">
const props = defineProps<{
  modelValue: (string | number)[]
  value: string | number
}>()

const emit = defineEmits(['update:modelValue'])

function updateCheckBox() {
  const newModelValue = [...props.modelValue]

  if (!newModelValue.includes(props.value)) {
    newModelValue.push(props.value)
  } else {
    newModelValue.splice(newModelValue.indexOf(props.value), 1)
  }

  emit('update:modelValue', newModelValue)
}
</script>

<template>
  <label class="checkbox cursor-pointer no copy">
    <span
      class="checkbox__title"
      :class="modelValue.includes(value) ? 'main-white' : 'second-white'"
    >
      <slot></slot>
    </span>

    <span
      class="checkbox__checkmark"
      :class="`checkbox__checkmark_${modelValue.includes(value) ? 'selected' : 'deselected'}`"
    >
    </span>

    <input
      class="checkbox__input"
      type="checkbox"
      :checked="modelValue.includes(value)"
      :value="value"
      @change="updateCheckBox"
    />
  </label>
</template>

<style scoped>
.checkbox {
  position: relative;
  display: block;
  padding-left: 20px;
  font-size: 15px;
}

.checkbox__checkmark {
  position: absolute;
  top: 1px;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 4px;
}

.checkbox__checkmark_deselected {
  background-color: var(--main-white);
}
.checkbox__checkmark_selected {
  background-color: var(--main-blue);
  box-shadow: 0px 0px 5px var(--main-blue);
}
.checkbox__checkmark_selected::before {
  content: '';
  position: absolute;
  top: 47%;
  left: 47%;
  width: 40%;
  height: 60%;
  box-sizing: border-box;
  border: solid var(--main-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translate(-100%, -25%);
}
.checkbox:hover .checkbox__checkmark_deselected {
  background-color: var(--second-white);
}

.checkbox__input {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
</style>

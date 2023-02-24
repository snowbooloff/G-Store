<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: [number, number]
  minValue: number
  maxValue: number
  stepValue: number
}>()

const rangeInput1 = ref<HTMLInputElement | null>()
const rangeInput2 = ref<HTMLInputElement | null>()

const emit = defineEmits(['update:modelValue'])

function updateRange() {
  let newModelValue: (string | number)[]

  newModelValue = [
    (rangeInput1.value as HTMLInputElement).value,
    (rangeInput2.value as HTMLInputElement).value
  ]

  newModelValue.sort((a, b) => +a - +b)

  if (newModelValue[0] == newModelValue[1]) {
    newModelValue[0] = props.minValue
    newModelValue[1] = props.maxValue
  }

  emit('update:modelValue', newModelValue)
}

function checkFirstInputsValue(event: Event) {
  const value = (event.target as HTMLInputElement).value

  if (Number(value) >= props.minValue && Number(value) < props.maxValue) {
    ;(rangeInput1.value as HTMLInputElement).value = value
    setTimeout(updateRange, 500)
  }
}

function checkSecondInputsValue(event: Event) {
  const value = (event.target as HTMLInputElement).value
  if (Number(value) > props.minValue && Number(value) <= props.maxValue) {
    ;(rangeInput2.value as HTMLInputElement).value = value
    setTimeout(updateRange, 500)
  }
}
</script>

<template>
  <section class="range-slider">
    <input
      ref="rangeInput1"
      type="range"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      :value="modelValue[0]"
      @change="updateRange"
    />
    <input
      ref="rangeInput2"
      type="range"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
      :value="modelValue[1]"
      @change="updateRange"
    />
    <input
      class="range-slider__input range-slider__input_1 main-white"
      placeholder="Min"
      :value="modelValue[0]"
      @input="checkFirstInputsValue"
    />
    <input
      class="range-slider__input range-slider__input_2 main-white"
      placeholder="Max"
      :value="modelValue[1]"
      @input="checkSecondInputsValue"
    />
  </section>
</template>

<style scoped>
.range-slider {
  width: 100%;
  padding-bottom: calc(39px + var(--medium-spacing));
  position: relative;
}

input[type='range'] {
  -webkit-appearance: none;
  background: var(--second-white);
  border-radius: 10px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 2px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--main-blue);
  box-shadow: 0px 0px 5px var(--main-blue);
  margin-top: -6px;
  position: relative;
  top: 3px;
  z-index: 2;
  cursor: pointer;
}

input[type='range']::-ms-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--main-blue);
  box-shadow: 0px 0px 5px var(--main-blue);
  margin-top: -6px;
  position: relative;
  top: 3px;
  z-index: 2;
  cursor: pointer;
}

input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--main-blue);
  box-shadow: 0px 0px 5px var(--main-blue);
  margin-top: -6px;
  position: relative;
  top: 3px;
  z-index: 2;
  cursor: pointer;
}

.range-slider__input {
  position: absolute;
  top: calc(9px + var(--medium-spacing));
  background-color: transparent;
  border: 2px solid var(--main-blue);
  border-radius: 5px;
  padding: 3px 3px 3px 7px;
  width: 30%;
}
.range-slider__input_1 {
  left: 5px;
}
.range-slider__input_2 {
  right: 5px;
}
</style>

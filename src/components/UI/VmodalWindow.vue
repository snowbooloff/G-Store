<script setup>
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const modalWindow = ref(null)

function OutSideClickHandler(event) {
  if (event.target != modalWindow.value) {
    emit('update:modelValue', false)
  }
}
document.addEventListener('click', OutSideClickHandler)

onBeforeUnmount(() => {
  document.removeEventListener('click', OutSideClickHandler)
})
</script>

<template>
  <div ref="modalWindow" class="modal-window" @click.stop="OutSideClickHandler">
    <slot></slot>
  </div>
</template>

<style scoped></style>

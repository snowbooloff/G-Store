<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isVisible'])

const modalWindow = ref(null)

function outSideClickHandler(event: Event) {
  if (event.target != modalWindow.value) {
    emit('update:isVisible', false)
  }
}
document.addEventListener('click', outSideClickHandler)

onBeforeUnmount(() => {
  document.removeEventListener('click', outSideClickHandler)
})
</script>

<template>
  <div
    ref="modalWindow"
    class="modal-window"
    @click.stop="outSideClickHandler"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.modal-window {
  position: absolute;
  border-radius: var(--small-radius);
  box-shadow: 0px 0px 6px var(--second-white);
  background-color: var(--main-white);
  padding: var(--medium-spacing);
}
</style>

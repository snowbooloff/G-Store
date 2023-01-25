<script setup>
const props = defineProps({
  itemsList: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="items-list">
    <slot name="item" v-for="item in itemsList" :item="item" :key="item.id"> </slot>
  </div>
</template>

<style scoped>
.items-list {
  display: grid;
  gap: var(--medium-spacing);
}

.items-list__not-found {
  text-align: center;
}
</style>

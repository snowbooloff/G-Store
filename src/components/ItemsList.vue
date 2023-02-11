<script setup lang="ts">
const props = defineProps<{
  itemsList: any[]
}>()
</script>

<template>
  <div class="items-list">
    <slot
      name="item"
      v-for="item in itemsList"
      :item="item"
      :key="item.id"
    >
    </slot>
  </div>
</template>

<style scoped>
.items-list {
  display: grid;
  gap: var(--medium-spacing);
  grid-template-columns: repeat(4, 0.25fr);
}
@media (max-width: 1440px) {
  .items-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 900px) {
  .items-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .items-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

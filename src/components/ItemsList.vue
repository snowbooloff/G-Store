<script setup lang="ts">
interface IItemsList {
  id: number
}

const props = defineProps<{
  itemsList: IItemsList[]
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
}
</style>

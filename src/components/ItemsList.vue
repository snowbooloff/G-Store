<script setup lang="ts">
// TS Interfaces
import { IGame } from '@/ts/game.interface'
import { IGenres } from '@/ts/genres.interface'

interface IItemsList {
  id: number
  item: IGame | IGenres
}

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
}
</style>

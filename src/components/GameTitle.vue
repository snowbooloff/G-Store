<script setup lang="ts">
const props = defineProps<{
  gameId: number
  gameName: string
}>()
</script>

<template>
  <router-link
    :to="`/game/${gameId}`"
    class="game-title"
    :title="gameName"
  >
    <h3 class="game-title__header">
      {{ gameName }}
    </h3>
  </router-link>
</template>

<style scoped>
.game-title {
  text-decoration: none;
  color: var(--main-white);
  height: 1.3455em;
  overflow: hidden;
}
.game-title:hover {
  color: var(--main-blue);
}
</style>

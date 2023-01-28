<script setup>
const props = defineProps({
  gameId: {
    type: Number,
    required: true
  },
  gameName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/game/${gameId}`" class="game-title" :title="gameName">
    <h3 class="game-title__header">
      {{ gameName }}
    </h3>
  </RouterLink>
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
.game-title__header {
}
</style>

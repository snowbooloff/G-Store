<script setup lang="ts">
defineProps<{
  score: number | null
}>()
</script>

<template>
  <p
    v-if="score"
    class="metacritic-store"
    :class="{
      'metacritic-store_green': score >= 70,
      'metacritic-store_yellow': score <= 70 && score >= 40,
      'metacritic-store_red': score < 40
    }"
  >
    <slot></slot>
    {{ score }}
  </p>
</template>

<style scoped>
.metacritic-store {
  line-height: 1;
  padding: 3px;
  border: 2px solid;
  border-radius: 6px;
}
.metacritic-store_green {
  border-color: #008000;
  color: #008000;
}
.metacritic-store_yellow {
  border-color: #ffc300;
  color: #ffc300;
}
.metacritic-store_red {
  border-color: #d00000;
  color: #d00000;
}
</style>

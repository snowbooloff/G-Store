<script setup>
const prop = defineProps(['platforms'])
</script>

<template>
  <div class="game-platforms">
    <span>
      <c-icon
        class="game-platforms__icon"
        v-for="platform of platforms"
        :icon="platform['platform']['name']"
        :key="platform['platform']['name']"
      />
    </span>
  </div>
</template>

<style scoped>
.game-platforms__icon {
  height: 100%;
  margin-right: var(--medium-spacing);
}

.game-platforms__icon:nth-last-child(1) {
  margin-right: 0;
}
</style>

<script setup>
const props = defineProps({
  platforms: {
    type: Array,
    required: true
  }
})

const validPlatforms = ['PC', 'PlayStation', 'Xbox', 'Android', 'iOS', 'Nintendo']
const filteredPlatforms = props.platforms.filter((platform) =>
  validPlatforms.includes(platform['platform']['name'])
)
</script>

<template>
  <div class="game-platforms flex flex-align-center">
    <component
      v-for="platform of filteredPlatforms"
      :key="platform['platform']['name']"
      :is="`icon-${platform['platform']['name'].toLowerCase()}`"
      class="game-platforms__icon main-white"
    />
  </div>
</template>

<style scoped>
.game-platforms {
  gap: var(--medium-spacing);
}
.game-platforms__icon {
  height: 100%;
}
</style>

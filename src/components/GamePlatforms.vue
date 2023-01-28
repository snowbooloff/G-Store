<script setup>
import { onMounted, inject } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  platforms: {
    type: Array,
    required: true
  }
})
let { setPlatform } = route.name == 'explore' ? inject('setPlatforms') : ''

function goToExplore(platformId, platformName) {
  if (route.name != 'explore') {
    router.push({
      path: '/explore',
      query: {
        platforms: [platformId],
        title: platformName + ' Games'
      }
    })
  } else {
    setPlatform(platformId)
  }
}

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
      class="game-platforms__icon cursor-pointer"
      @click="goToExplore(platform['platform']['id'], platform['platform']['name'])"
    />
  </div>
</template>

<style scoped>
.game-platforms {
  gap: var(--medium-spacing);
}
.game-platforms__icon {
  height: 100%;
  color: var(--main-white);
}
.game-platforms__icon:hover {
  color: var(--main-blue);
}
</style>

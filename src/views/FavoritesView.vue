<script setup>
import { ref, onMounted, watch, computed } from 'vue'

//Components
import ItemsList from '../components/ItemsList.vue'
import GameItem from '../components/GameItem.vue'
import NavBarForEmpty from '../components/NavBarForEmpty.vue'

//Composables
import fetchGameDetails from '../composables/fetchGameDetails'

//Utils
import { localStorageUtil } from '../localStorage'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const store = useStore()

const favGamesList = ref([])

onMounted(() => {
  const storageList = localStorageUtil.getList(localStorageUtil.favorites)

  if (storageList.length) {
    store.commit('loading/setLoading', true)

    storageList.forEach((gameId) => {
      const game = ref([])

      fetchGameDetails(game, gameId, router)
        .then(() => {
          favGamesList.value.push(game.value)
        })
        .then(() => {
          if (gameId == storageList[storageList.length - 1]) {
            store.commit('loading/setLoading', false)
          }
        })
    })
  }
})
</script>

<template>
  <section class="page-block flex flex_column">
    <h1 class="page-block__title main-white">Favorite Games</h1>

    <items-list
      v-if="!$store.state.isLoading && favGamesList.length"
      class="game-list"
      :itemsList="favGamesList"
    >
      <template #item="slotProps">
        <game-item :game="slotProps.item" />
      </template>
    </items-list>
    <nav-bar-for-empty v-if="!$store.state.isLoading && !favGamesList.length">
      Favorites list is empty
    </nav-bar-for-empty>
  </section>
</template>

<style scoped>
.game-list {
  grid-template-columns: repeat(auto-fill, minmax(400px, 0.25fr));
}
</style>

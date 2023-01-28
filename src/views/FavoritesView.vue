<script setup>
import { ref, onMounted, watch, computed } from 'vue'

//Components
import ItemsList from '../components/ItemsList.vue'
import GameItem from '../components/GameItem.vue'
import PageLoader from '../components/PageLoader.vue'

//Composables
import fetchGameDetails from '../composables/fetchGameDetails.js'

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
    store.commit('setLoading', true)

    storageList.forEach((gameId) => {
      const game = ref([])

      fetchGameDetails(game, gameId, router)
        .then(() => {
          favGamesList.value.push(game.value)
        })
        .then(() => {
          if (gameId == storageList[storageList.length - 1]) {
            store.commit('setLoading', false)
          }
        })
    })
  }
})
</script>

<template>
  <div class="page container pt-64px flex flex_column">
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
      <h3
        v-if="!$store.state.isLoading && !favGamesList.length"
        class="page-block__not-found main-white"
      >
        List is empty
      </h3>
    </section>
  </div>

  <page-loader v-if="$store.state.isLoading" />
</template>

<style>
.page-block__not-found {
  text-align: center;
}
</style>

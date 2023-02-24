<script setup lang="ts">
import { shallowRef, onMounted, computed } from 'vue'

// TS Interfaces
import { IGame } from '@/ts/game.interface'
import type { Ref } from 'vue'

//Components
import ItemsList from '@/components/ItemsList.vue'
import GameItem from '@/components/GameItem.vue'
import NavBarForEmpty from '@/components/NavBarForEmpty.vue'

//Composables
import fetchGameDetails from '@/composables/fetchGameDetails'

//Utils
import { localStorageUtil } from '@/localStorage'
import { useStore } from 'vuex'
const store = useStore()

const favGamesList = shallowRef<[IGame] | []>([])

onMounted(() => {
  const storageList = localStorageUtil.getList(localStorageUtil.favorites)

  if (storageList.length) {
    store.commit('loading/setLoading', true)

    storageList.forEach((gameId: number) => {
      const game = shallowRef<IGame | {}>({})

      fetchGameDetails(game, gameId).then(() => {
        ;(favGamesList as Ref<[IGame]>).value.push((game as Ref<IGame>).value)

        if (favGamesList.value.length == storageList.length) {
          store.commit('loading/setLoading', false)
        }
      })
    })
  }
})

const loading = computed<boolean>(() => store.state.loading.isLoading)
</script>

<template>
  <section class="page-block flex flex_column">
    <h1 class="page-block__title main-white">Favorite Games</h1>

    <items-list
      v-if="!loading && favGamesList.length"
      class="game-list"
      :itemsList="favGamesList"
    >
      <template #item="slotProps">
        <game-item :game="slotProps.item" />
      </template>
    </items-list>
    <nav-bar-for-empty v-if="!loading && !favGamesList.length">
      Favorites list is empty
    </nav-bar-for-empty>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// TS Interfaces
import { IGame } from '@/ts/game.interface'

//Components
import ItemsList from '../components/ItemsList.vue'
import GameItem from '../components/GameItem.vue'
import GenreItem from '../components/GenreItem.vue'
import GameBoard from '../components/GameBoard.vue'

//Composables
import fetchGames from '../composables/fetchGames'

//Utils
import { useStore } from 'vuex'
const store = useStore()

const newDate = new Date()
const date = {
  previousYear: newDate.getFullYear() - 1,
  year: newDate.getFullYear(),
  nextYear: newDate.getFullYear() + 1,
  month:
    `${newDate.getMonth() + 1}`.length == 1 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1,
  day: `${newDate.getDate()}`.length == 1 ? `0${newDate.getDate()}` : newDate.getDate()
}

const pastDatePeriod = `${date.previousYear}-${date.month}-${date.day},${date.year}-${date.month}-${date.day}`
const nextDatePeriod = `${date.year}-${date.month}-${date.day},${date.nextYear}-${date.month}-${date.day}`

const randomPage = Math.floor(Math.random() * 10) + 1

const newReleasesGamesList = ref<IGame[]>([])
const comingSoonGamesList = ref<IGame[]>([])
const highestRatingGamesList = ref<IGame[]>([])
const gamesForBoard = ref<IGame[]>([])
onMounted(() => {
  store.commit('loading/setLoading', true)

  const f1 = fetchGames(newReleasesGamesList, 1, {
    date: pastDatePeriod,
    size: 8,
    sort: '-released',
    rating: [10, 100]
  })
  const f2 = fetchGames(comingSoonGamesList, 1, {
    date: nextDatePeriod,
    size: 8,
    sort: '-added',
    rating: ['-']
  })
  const f3 = fetchGames(highestRatingGamesList, 1, {
    date: '',
    size: 8,
    sort: '-metacritic',
    rating: [10, 96]
  })
  const f4 = fetchGames(gamesForBoard, randomPage, {
    date: '',
    size: 3,
    platforms: [''],
    rating: [10, 100]
  })
  Promise.all([f1, f2, f3, f4]).then(() => {
    store.commit('loading/setLoading', false)
  })
})
</script>

<template>
  <game-board
    v-if="gamesForBoard.length"
    :game="gamesForBoard[0]"
    @click="$router.push(`/game/${gamesForBoard[0].id}`)"
  />

  <section class="page-block flex flex_column">
    <div class="nav-bar flex flex_space-between flex_align-center">
      <h1 class="nav-bar__title main-white">New Releases</h1>
      <button
        class="nav-bar__bttn bttn bttn_transparent"
        @click="
          $router.push({
            path: '/explore',
            query: {
              sort: '-released',
              title: 'New Releases'
            }
          })
        "
      >
        VIEW ALL +
      </button>
    </div>

    <items-list
      class="game-list"
      :itemsList="newReleasesGamesList"
    >
      <template #item="slotProps">
        <game-item :game="slotProps.item" />
      </template>
    </items-list>
  </section>

  <game-board
    v-if="gamesForBoard.length"
    :game="gamesForBoard[1]"
    @click="$router.push(`/game/${gamesForBoard[1].id}`)"
  />

  <section class="page-block flex flex_column">
    <div class="nav-bar flex flex_space-between flex_align-center">
      <h1 class="nav-bar__title main-white">Coming Soon</h1>
      <button
        class="nav-bar__bttn bttn bttn_transparent"
        @click="
          $router.push({
            path: '/explore',
            query: {
              date: nextDatePeriod,
              rating: JSON.stringify([0, 100]),
              title: 'Coming Soon'
            }
          })
        "
      >
        VIEW ALL +
      </button>
    </div>

    <items-list
      class="game-list"
      :itemsList="comingSoonGamesList"
    >
      <template #item="slotProps">
        <game-item :game="slotProps.item" />
      </template>
    </items-list>
  </section>

  <game-board
    v-if="gamesForBoard.length"
    :game="gamesForBoard[2]"
    @click="$router.push(`/game/${gamesForBoard[2].id}`)"
  />

  <section class="page-block flex flex_column">
    <div class="nav-bar flex flex_space-between flex_align-center">
      <h1 class="nav-bar__title main-white">Highest rating</h1>
      <button
        class="nav-bar__bttn bttn bttn_transparent"
        @click="
          $router.push({
            path: '/explore',
            query: {
              sort: '-metacritic',
              title: 'Highest Rating Games'
            }
          })
        "
      >
        VIEW ALL +
      </button>
    </div>

    <items-list
      class="game-list"
      :itemsList="highestRatingGamesList"
    >
      <template #item="slotProps">
        <game-item :game="slotProps.item" />
      </template>
    </items-list>
  </section>

  <section class="page-block flex flex_column">
    <h1 class="page-block__title main-white">Genres</h1>

    <items-list
      class="genre-list"
      :itemsList="store.state.genres.genresList"
    >
      <template #item="slotProps">
        <genre-item
          :genre="slotProps.item"
          @click="
            $router.push({
              path: '/explore',
              query: {
                genres: JSON.stringify([slotProps.item.id]),
                title: `${slotProps.item.name} Games`
              }
            })
          "
        />
      </template>
    </items-list>
  </section>
</template>

<style scoped>
.genre-list {
  grid-template-columns: repeat(6, 0.166fr);
}
@media (max-width: 1440px) {
  .genre-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .genre-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .genre-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<script setup>
import { ref, onMounted, reactive, watch, computed } from 'vue'

//Components
import ItemsList from '../components/ItemsList.vue'
import GameItem from '../components/GameItem.vue'

//Composables
import fetchGames from '../composables/fetchGames.js'
import fetchMoreGames from '../composables/fetchMoreGames.js'

//Utils
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const store = useStore()

const exploreGamesList = ref([])
const totalGamesCount = ref(0)
let currentPage = 1

const query = reactive({
  sort: route.query.sort || '',
  date: route.query.date || '',
  rating: route.query.rating || [10, 100],
  genres: route.query.genres || [],
  platforms: [],
  tags: [],
  search: '',
  size: 24
})

const filterIsActive = ref(true)

const sortOptions = reactive([
  { value: '-metacritic', name: 'Rating: High to Low' },
  { value: 'metacritic', name: 'Rating: Low to High' },
  { value: '-released', name: 'Date: Newest to Oldest' },
  { value: 'released', name: 'Date: Oldest to Newest' }
])

function clearFilters() {
  query.sort = ''
  query.date = ''
  query.rating = [10, 100]
  query.genres = []
  query.platforms = []
  query.tags = []
  query.search = ''
}

function fetching() {
  store.commit('setLoading', true)
  fetchGames(exploreGamesList, currentPage, query, totalGamesCount).then(() => {
    store.commit('setLoading', false)
  })
}

onMounted(() => {
  fetching()
})

const totalPagesCount = computed(() => {
  return Math.ceil(totalGamesCount.value / query.size)
})

watch(query, () => {
  router.push({ path: route.path })

  currentPage = 1
  query.date = ''

  let firstCondition1 = query.rating[0] >= 10 && query.rating[0] <= 100
  let firstCondition2 = query.rating[1] >= 10 && query.rating[1] <= 100

  if (firstCondition1 && firstCondition2) {
    fetching()
  }
})

function loadMoreGames() {
  if (currentPage < totalPagesCount.value) {
    currentPage++
    fetchMoreGames(exploreGamesList, currentPage, query)
  }
}
</script>

<template>
  <div class="page container pt-64px flex flex-column">
    <section class="page-block flex flex-column">
      <div class="nav-bar flex flex-space-between flex-align-center">
        <h1 class="nav-bar__title main-white">{{ $route.query.title || 'Explore Games' }}</h1>

        <c-select class="nav-bar__select" v-model="query.sort" :options="sortOptions">
          Select orders
        </c-select>
      </div>

      <div class="search-block flex">
        <search-input
          class="search-block__input"
          v-model.trim="query.search"
          :placeholder="`Search ${totalGamesCount} games`"
        />

        <button
          class="bttn bttn_transparent search-block__bttn flex"
          @click="filterIsActive = !filterIsActive"
        >
          Filter
          <c-icon
            class="search-block__icon"
            :class="{ 'search-block__icon_active': filterIsActive }"
            :icon="'arrow-down'"
          />
        </button>
      </div>

      <div class="explore-block flex">
        <items-list
          v-show="!$store.state.isLoading"
          class="explore-block_content game-list"
          :itemsList="exploreGamesList"
        >
          <template #item="slotProps">
            <game-item :game="slotProps.item" />
          </template>
        </items-list>

        <h3
          v-show="!exploreGamesList.length && !$store.state.isLoading"
          class="explore-block__not-found main-white"
        >
          Games not found...
        </h3>

        <aside class="filters" v-show="filterIsActive">
          <div class="filters__block">
            <h4 class="filters__title main-white">Platforms</h4>

            <c-checkbox class="filters__item" v-model="query.platforms" :value="1"> PC </c-checkbox>

            <c-checkbox tabindex="2" class="filters__item" v-model="query.platforms" :value="2">
              PlayStation
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.platforms" :value="3">
              XBOX
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.platforms" :value="4">
              iOS
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.platforms" :value="7">
              Nintendo
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.platforms" :value="8">
              Android
            </c-checkbox>
          </div>

          <div class="filters__block">
            <h4 class="filters__title main-white">Features</h4>

            <c-checkbox class="filters__item" v-model="query.tags" :value="31">
              Singleplayer
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.tags" :value="7">
              Multiplayer
            </c-checkbox>

            <c-checkbox class="filters__item" v-model="query.tags" :value="18">
              Cooperative
            </c-checkbox>
          </div>

          <div class="filters__block">
            <h4 class="filters__title main-white">Genres</h4>

            <c-checkbox
              class="filters__item"
              v-for="genre in $store.state.genresList"
              v-model="query.genres"
              :value="genre.id.toString()"
            >
              {{ genre.name }}
            </c-checkbox>
          </div>

          <div class="filters__block">
            <h4 class="filters__title main-white">Rating</h4>

            <range-slider
              class="filters__item"
              v-model="query.rating"
              :minValue="10"
              :maxValue="100"
              :stepValue="1"
            />
          </div>

          <button class="filters__block bttn bttn_transparent" @click="clearFilters">Clear</button>
        </aside>
      </div>
    </section>

    <div v-if="!$store.state.isLoading" class="observer" v-intersection="loadMoreGames"></div>
  </div>

  <c-loading v-if="$store.state.isLoading" />
</template>

<style>
.search-block {
  gap: var(--medium-spacing);
}

.search-block__icon {
  height: 20px;
}

.search-block__icon_active {
  transform: rotate(180deg);
}

.explore-block {
  align-items: flex-start;
  gap: var(--medium-spacing);
}

.explore-block_content {
  width: 100%;
}

.explore-block__not-found {
  width: 100%;
}

.filters {
  min-width: 225px;
  position: sticky;
  top: calc(48px + var(--medium-spacing));
  margin-left: auto;
  padding: var(--large-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.filters__block {
  margin-top: var(--medium-spacing);
}

.filters__block:first-child {
  margin-top: 0;
}

.filters__item {
  margin-top: var(--small-spacing);
}
</style>

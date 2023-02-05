<script setup>
import { ref, onMounted, reactive, watch, computed, provide } from 'vue'

//Components
import ItemsList from '../components/ItemsList.vue'
import GameItem from '../components/GameItem.vue'

//Composables
import fetchGames from '../composables/fetchGames'
import fetchMoreGames from '../composables/fetchMoreGames'

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
  platforms: route.query.platforms || [],
  tags: [],
  search: '',
  size: 24
})

function clearFilters() {
  query.sort = ''
  query.date = ''
  query.rating = [10, 100]
  query.genres = []
  query.platforms = []
  query.tags = []
  query.search = ''
}

provide('setPlatforms', {
  setPlatform
})

function setPlatform(platformId) {
  if (!query.platforms.includes(String(platformId))) {
    query.platforms.push(String(platformId))
  }
}

const filterIsActive = ref(true)

const sortOptions = reactive([
  { value: '-metacritic', name: 'Rating: High to Low' },
  { value: 'metacritic', name: 'Rating: Low to High' },
  { value: '-released', name: 'Date: Newest to Oldest' },
  { value: 'released', name: 'Date: Oldest to Newest' }
])

function fetching() {
  store.commit('loading/setLoading', true)
  fetchGames(exploreGamesList, currentPage, query, totalGamesCount).then(() => {
    store.commit('loading/setLoading', false)
  })
}

onMounted(() => {
  window.scrollTo(0, 0)
  fetching()
})

const totalPagesCount = computed(() => {
  return Math.ceil(totalGamesCount.value / query.size)
})

watch(query, () => {
  currentPage = 1
  query.date = ''

  router.push(route.path)

  let firstCondition = query.rating[0] >= 10 && query.rating[0] <= 100
  let secondCondition = query.rating[1] >= 10 && query.rating[1] <= 100

  if (firstCondition && secondCondition) {
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
  <section class="page-block flex flex_column">
    <div class="nav-bar flex flex_space-between flex_align-center">
      <h1 class="nav-bar__title main-white">{{ route.query.title || 'Explore Games' }}</h1>

      <v-select
        class="nav-bar__select"
        v-model="query.sort"
        :options="sortOptions"
      >
        Default order
      </v-select>
    </div>

    <div class="search-block flex">
      <v-search-input
        class="search-block__input"
        v-model.trim="query.search"
        :placeholder="`Search ${totalGamesCount} games`"
      />

      <button
        class="bttn bttn_transparent search-block__bttn flex flex_align-center"
        @click="filterIsActive = !filterIsActive"
      >
        Filter
        <icon-arrow
          class="search-block__icon"
          :class="{ 'search-block__icon_active': filterIsActive }"
        />
      </button>
    </div>

    <div class="explore-block flex">
      <items-list
        v-show="!$store.state.isLoading && exploreGamesList.length"
        class="explore-block__content game-list"
        :itemsList="exploreGamesList"
      >
        <template #item="slotProps">
          <game-item :game="slotProps.item" />
        </template>
      </items-list>

      <h3
        v-show="!$store.state.isLoading && !exploreGamesList.length"
        class="explore-block__not-found second-white"
      >
        List is empty
      </h3>

      <aside
        class="filters"
        v-show="filterIsActive"
      >
        <div class="filters__block">
          <h4 class="filters__title main-white">Platforms</h4>

          <v-checkbox
            class="filters__item"
            v-model="query.platforms"
            :value="'1'"
          >
            PC
          </v-checkbox>

          <v-checkbox
            tabindex="2"
            class="filters__item"
            v-model="query.platforms"
            :value="'2'"
          >
            PlayStation
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.platforms"
            :value="'3'"
          >
            XBOX
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.platforms"
            :value="'4'"
          >
            iOS
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.platforms"
            :value="'7'"
          >
            Nintendo
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.platforms"
            :value="'8'"
          >
            Android
          </v-checkbox>
        </div>

        <div class="filters__block">
          <h4 class="filters__title main-white">Features</h4>

          <v-checkbox
            class="filters__item"
            v-model="query.tags"
            :value="31"
          >
            Singleplayer
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.tags"
            :value="7"
          >
            Multiplayer
          </v-checkbox>

          <v-checkbox
            class="filters__item"
            v-model="query.tags"
            :value="18"
          >
            Cooperative
          </v-checkbox>
        </div>

        <div class="filters__block">
          <h4 class="filters__title main-white">Genres</h4>

          <v-checkbox
            class="filters__item"
            v-for="genre in $store.state.genres.genresList"
            v-model="query.genres"
            :value="genre.id.toString()"
          >
            {{ genre.name }}
          </v-checkbox>
        </div>

        <div class="filters__block">
          <h4 class="filters__title main-white">Rating</h4>

          <v-range-slider
            class="filters__item"
            v-model="query.rating"
            :minValue="10"
            :maxValue="100"
            :stepValue="1"
          />
        </div>

        <button
          class="filters__block bttn bttn_transparent"
          @click="clearFilters"
        >
          Clear
        </button>
      </aside>
    </div>
  </section>

  <div
    v-if="!$store.state.isLoading"
    class="observer"
    v-intersection="loadMoreGames"
  ></div>
</template>

<style scoped>
.game-list {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
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

.explore-block__content {
  width: 100%;
}

.explore-block__not-found {
  width: 100%;
  text-align: center;
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

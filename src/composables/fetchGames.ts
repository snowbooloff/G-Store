import { ref } from 'vue'
import axios from 'axios'
import router from '../router'

// TS Interfaces
import { IQuery } from '@/ts/query.interface'
import { IGame } from '@/ts/game.interface'

//Api
import { key } from '../api/rawg'

export function fetchGames(
  page: number,
  { date, size, sort, search, platforms = [], rating, tags = [], genres = [] }: IQuery
) {
  const data = ref<IGame[]>([])
  const totalItemsCount = ref<number>(0)

  const fetching = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games?', {
        params: {
          page: page,

          dates: date,
          page_size: size,
          ordering: sort,
          metacritic: rating.join(','),
          parent_platforms: platforms.join(',') || '1,2,3,4,7,8',
          tags: tags.join(',') || null,
          genres: genres.join(',') || null,
          search: search,

          exclude_additions: true,
          search_precise: true,

          key: key
        }
      })
      data.value = response.data.results
      totalItemsCount.value = response.data.count
    } catch (err) {
      console.warn(err)
      router.push('/error')
    }
  }

  return fetching().then(() => {
    return { data, totalItemsCount }
  })
}

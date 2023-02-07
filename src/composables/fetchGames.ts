import axios from 'axios'
import router from '../router'

// TS Interfaces
import { IQuery } from '@/ts/query.interface'
import type { Ref } from 'vue'

export default async function fetchGames(
  arr: Ref,
  page: number,
  { date, size, sort, search, platforms = [], rating, tags = [], genres = [] }: IQuery,
  totalGamesCount?: any
) {
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

        key: '6be3bec5eec246719e96cc8c4b02ca8f'
      }
    })
    arr.value = response.data.results

    if (totalGamesCount) {
      totalGamesCount.value = response.data.count
    }
  } catch (err) {
    console.warn(err)
    router.push('/error')
  }
}

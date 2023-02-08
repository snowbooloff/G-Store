import axios from 'axios'
import router from '../router'
import type { Ref } from 'vue'
import { key } from '../api/rawg'

// TS Interfaces
import { IQuery } from '@/ts/query.interface'

export default async function fetchMoreGames(
  arr: Ref,
  page: number,
  { date, size, sort, search, platforms = [], rating, tags = [], genres = [] }: IQuery
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

        key: key
      }
    })
    arr.value = [...arr.value, ...response.data.results]
  } catch (err) {
    console.warn(err)
    router.push('/error')
  }
}

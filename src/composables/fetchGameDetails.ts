import axios from 'axios'
import router from '@/router'

import type { Ref } from 'vue'
type gameId = number | string | string[]

//Api
import { key } from '../api/rawg'

export default async function fetchGameDetails(gameArr: Ref, id: gameId) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: key
      }
    })
    gameArr.value = await response.data
  } catch (err) {
    console.warn(err)
    router.push('/error')
  }
}

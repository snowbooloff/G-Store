import type { Ref } from 'vue'
import axios from 'axios'
import router from '../router'

export default async function fetchGameDetails(gameArr: Ref, id: string | string[]) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: '6be3bec5eec246719e96cc8c4b02ca8f'
      }
    })
    gameArr.value = await response.data
  } catch (err) {
    console.warn(err)
    router.push('/error')
  }
}

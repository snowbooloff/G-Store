import axios from 'axios'
import router from '../router'

export default async function fetchGameDetails(gameArr: any, id: number) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: '6be3bec5eec246719e96cc8c4b02ca8f'
      }
    })
    gameArr.value = response.data
  } catch (err: any) {
    router.push('/error')
  }
  return gameArr
}

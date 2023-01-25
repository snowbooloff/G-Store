import axios from 'axios'
export default async function getGameDetails(arr, id, router) {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: '6be3bec5eec246719e96cc8c4b02ca8f',
      },
    })
    arr.value = response.data
  } catch (error) {
    console.warn(error.message)
    router.push('/error')
  }
}

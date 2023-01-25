import axios from 'axios'
export default async function checkPromo(arr, id, router) {
  try {
    const response = await axios.get(
      `https://gstore-games-6be8c-default-rtdb.europe-west1.firebasedatabase.app/promo`
    )
    console.log(response)
  } catch (error) {
    console.warn(error.message)
  }
}

import { getDatabase, ref, child, get } from 'firebase/database'
export default function checkPromo(currentValue) {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `Promo`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const fetchedData = snapshot.val()
        const validatedPromo = fetchedData.find((promo) => promo.value === currentValue.value)
        currentValue.isChecked = true
        if (!!validatedPromo) {
          currentValue.isActive = true
          currentValue.discount = validatedPromo.discount
          currentValue.discountType = validatedPromo.discountType
        } else {
          currentValue.isActive = false
        }
      } else {
        console.log('No data available')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

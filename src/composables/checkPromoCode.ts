import { getDatabase, ref, child, get } from 'firebase/database'

interface IPromoCode {
  id?: number
  isActive?: boolean
  isChecked?: boolean
  value: string
  discount: number
  discountType: string
}

export default function checkPromo(currentValue: IPromoCode) {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `Promo`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const fetchedData = snapshot.val()
        const validatedPromo = fetchedData.find(
          (promo: IPromoCode) => promo.value === currentValue.value
        )

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

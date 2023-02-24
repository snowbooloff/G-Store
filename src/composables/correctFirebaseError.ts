import { FirebaseError } from 'firebase/app'
import type { Ref } from 'vue'

export default function correctErrorText(error: any, placeholder: Ref): void {
  const regexp = new RegExp(/[^\x2F][a-z,-]+(?=\x29)/g)

  let errorMessage = error.message.match(regexp)[0]

  errorMessage = errorMessage.replace(/-/g, ' ')
  errorMessage = errorMessage.replace(errorMessage[0], errorMessage[0].toUpperCase())

  placeholder.value = errorMessage
}

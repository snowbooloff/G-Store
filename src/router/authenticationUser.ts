import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function authenticationUser(): Promise<object | null> {
  return new Promise((resolve) => {
    onAuthStateChanged(getAuth(), (user) => resolve(user))
  })
}

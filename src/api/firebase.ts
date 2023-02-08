//Firebase
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDraHn-WZ632cl6lPtJlsinpvEPj4qIxxo',
  authDomain: 'gstore-buy-4d273.firebaseapp.com',
  projectId: 'gstore-buy-4d273',
  storageBucket: 'gstore-buy-4d273.appspot.com',
  messagingSenderId: '658773696495',
  appId: '1:658773696495:web:4a63ff491da071945be01a',
  databaseURL: 'https://gstore-buy-4d273-default-rtdb.europe-west1.firebasedatabase.app/'
}
const FireBaseApp = initializeApp(firebaseConfig)
const Database = getDatabase(FireBaseApp)
const Storage = getStorage(FireBaseApp)

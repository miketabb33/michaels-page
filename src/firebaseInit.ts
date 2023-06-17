import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { ENV } from './config/environments/currentEnv'

export const firebaseApp = initializeApp(ENV.firebaseConfig)
export const db = getFirestore(firebaseApp)

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { ENV } from '../config/environments/currentEnv'

const app = initializeApp(ENV.firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)

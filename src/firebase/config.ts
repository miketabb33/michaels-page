import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDprPwOCjEwEYcbW4nuPxFWtEOJFMc6bek',
  authDomain: 'michael-website-19ed0.firebaseapp.com',
  projectId: 'michael-website-19ed0',
  storageBucket: 'michael-website-19ed0.appspot.com',
  messagingSenderId: '855765427298',
  appId: '1:855765427298:web:763f3885091a33b5231d3b',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

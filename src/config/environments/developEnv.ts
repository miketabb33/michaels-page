import { EnvConfig } from './currentEnv'

const firebaseConfig_Dev = {
  apiKey: 'AIzaSyDprPwOCjEwEYcbW4nuPxFWtEOJFMc6bek',
  authDomain: 'michael-website-19ed0.firebaseapp.com',
  projectId: 'michael-website-19ed0',
  storageBucket: 'michael-website-19ed0.appspot.com',
  messagingSenderId: '855765427298',
  appId: '1:855765427298:web:763f3885091a33b5231d3b',
  measurementId: 'G-PP96RS59JC',
}

export const developEnv: EnvConfig = {
  firebaseConfig: firebaseConfig_Dev,
  id: 'develop',
}

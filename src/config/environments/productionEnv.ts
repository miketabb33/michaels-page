import { EnvConfig } from './currentEnv'

const firebaseConfig_Prod = {
  apiKey: 'AIzaSyCtqRREY6znnMH19OieyldddLfkT6tftqk',
  authDomain: 'michael-website-prod.firebaseapp.com',
  projectId: 'michael-website-prod',
  storageBucket: 'michael-website-prod.appspot.com',
  messagingSenderId: '798894266083',
  appId: '1:798894266083:web:9688813c4e93d2dc7cd7d6',
  measurementId: 'G-JN9MYTGX8R',
}

export const productionEnv: EnvConfig = {
  firebaseConfig: firebaseConfig_Prod,
}

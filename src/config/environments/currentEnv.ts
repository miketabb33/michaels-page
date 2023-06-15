import { FirebaseOptions } from 'firebase/app'
import { productionEnv } from './productionEnv'
import { developEnv } from './developEnv'

export type EnvConfig = {
  firebaseConfig: FirebaseOptions
}

const getEnv = (): EnvConfig => {
  if (SITE_ENV === 'production') return productionEnv
  else return developEnv
}

export const ENV: EnvConfig = getEnv()

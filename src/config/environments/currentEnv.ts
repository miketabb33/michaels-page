import { FirebaseOptions } from 'firebase/app'
import { productionEnv } from './productionEnv'
import { developEnv } from './developEnv'

export type EnvConfig = {
  firebaseConfig: FirebaseOptions
}

export const getEnv = (siteEnv: string): EnvConfig => {
  if (siteEnv === 'production') return productionEnv
  else return developEnv
}

export const ENV: EnvConfig = getEnv(SITE_ENV)

/* eslint-disable @typescript-eslint/no-floating-promises */
import { Analytics, getAnalytics, isSupported, setUserId } from 'firebase/analytics'
import { firebaseApp } from '../firebaseInit'

export let analytics: Analytics | null = null

export const initAnalytics = (userId: string) => {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(firebaseApp)
      setUserId(analytics, userId)
    }
  })
}

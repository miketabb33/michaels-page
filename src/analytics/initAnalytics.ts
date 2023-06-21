/* eslint-disable @typescript-eslint/no-floating-promises */
import { Analytics, getAnalytics, isSupported, setUserId } from 'firebase/analytics'
import { firebaseApp } from '../firebaseInit'

export let analytics: Analytics | null = null

export const initAnalyticsWhenSupported = (userId: string) => {
  isSupported().then((yes) => {
    if (yes) initAnalytics(userId)
  })
}

const initAnalytics = (userId: string) => {
  analytics = getAnalytics(firebaseApp)
  setUserId(analytics, userId)
}

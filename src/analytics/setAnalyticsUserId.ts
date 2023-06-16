/* eslint-disable @typescript-eslint/no-floating-promises */
import { setUserId } from 'firebase/analytics'
import { analytics } from '../firebaseInit'

export const setAnalyticsUserId = (userId: string) => {
  analytics.then((analytics) => {
    if (!analytics) return
    setUserId(analytics, userId)
  })
}

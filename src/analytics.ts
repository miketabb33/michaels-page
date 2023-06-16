/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { logEvent } from 'firebase/analytics'
import { analytics } from './firebaseInit'

export const trackEvent = (name: string, params?: { [key: string]: any }) => {
  analytics.then((analytics) => {
    if (!analytics) return
    logEvent(analytics, name, params)
  })
}

/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { logEvent } from 'firebase/analytics'
import { User } from '../context/AuthContext'
import { analytics } from '../firebaseInit'

type TrackEventArgs = {
  eventName: string
  params?: { [key: string]: any }
  user: User
}

export const trackEvent = ({ eventName, params, user }: TrackEventArgs) => {
  const defaultAnalyticParams = {
    userAgent: window.navigator.userAgent || 'null',
    language: window.navigator.language || 'null',
    userId: user.id,
  }

  analytics.then((analytics) => {
    if (!analytics) return
    logEvent(analytics, eventName, { ...params, ...defaultAnalyticParams })
  })
}

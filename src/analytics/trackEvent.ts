/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { logEvent } from 'firebase/analytics'
import { User } from '../context/AuthContext'
import { analytics } from './initAnalytics'

type TrackEventArgs = {
  eventKey: EventKey
  user: User
  params?: { [key: string]: any }
}

export const trackEvent = ({ eventKey, user, params }: TrackEventArgs) => {
  console.log(analytics)
  if (!analytics) return
  const defaultAnalyticParams = {
    userAgent: window.navigator.userAgent || 'null',
    language: window.navigator.language || 'null',
    userId: user.id,
  }
  logEvent(analytics, eventKey, { ...params, ...defaultAnalyticParams })
}

export type EventKey = 'start_pong' | 'flipped_profile_card'

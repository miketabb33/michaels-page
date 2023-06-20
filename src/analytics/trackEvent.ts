/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { logEvent } from 'firebase/analytics'
import { User } from '../context/AuthContext'
import { analytics } from './initAnalytics'

type TrackEventArgs = {
  eventKey: EventKey
  params?: { [key: string]: any }
  user: User
}

export const trackEvent = ({ eventKey, params, user }: TrackEventArgs) => {
  const defaultAnalyticParams = {
    userAgent: window.navigator.userAgent || 'null',
    language: window.navigator.language || 'null',
    userId: user.id,
  }

  if (!analytics) return
  logEvent(analytics, eventKey, { ...params, ...defaultAnalyticParams })
}

export type EventKey = 'start_pong' | 'flipped_profile_card'

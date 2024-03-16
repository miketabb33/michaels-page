/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../context/AuthContext'
import posthog from 'posthog-js'

type TrackEventArgs = {
  eventKey: EventKey
  user: User
  params?: { [key: string]: any }
}

export const trackEvent = ({ eventKey, user, params }: TrackEventArgs) => {
  const defaultAnalyticParams = {
    userAgent: window.navigator.userAgent || 'null',
    language: window.navigator.language || 'null',
    userId: user.id,
  }
  posthog.capture(eventKey, { ...params, ...defaultAnalyticParams })
}

export type EventKey = 'start_pong' | 'flipped_profile_card'

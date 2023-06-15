/* eslint-disable @typescript-eslint/no-explicit-any */
import { logEvent } from 'firebase/analytics'
import { analytics } from './config'

export const trackEvent = (name: string, params?: { [key: string]: any }) => {
  logEvent(analytics, name, params)
}

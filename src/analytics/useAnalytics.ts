/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '../context/AuthContext'
import { trackEvent as lowTractEvent } from './trackEvent'

export const useAnalytics = () => {
  const { user } = useAuth()

  const trackEvent = (eventKey: EventKey, params?: { [key: string]: any }) => {
    lowTractEvent({ eventName: eventKey, params, user })
  }

  return { trackEvent }
}

type EventKey = 'start_pong' | 'flipped_profile_card'

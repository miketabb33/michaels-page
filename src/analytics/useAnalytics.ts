/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '../context/AuthContext'
import { EventKey, trackEvent as lowTrackEvent } from './trackEvent'

export const useAnalytics = () => {
  const { user } = useAuth()

  const trackEvent = (eventKey: EventKey, params?: { [key: string]: any }) => {
    lowTrackEvent({ eventKey, params, user })
  }

  return { trackEvent }
}

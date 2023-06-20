/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '../context/AuthContext'
import { EventKey, trackEvent as lowTractEvent } from './trackEvent'

export const useAnalytics = () => {
  const { user } = useAuth()

  const trackEvent = (eventKey: EventKey, params?: { [key: string]: any }) => {
    lowTractEvent({ eventKey, params, user })
  }

  return { trackEvent }
}

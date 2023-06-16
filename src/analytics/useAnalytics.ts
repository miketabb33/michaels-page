/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from '../context/AuthContext'
import { trackEvent as lowTractEvent } from './trackEvent'

export const useAnalytics = () => {
  const { user } = useAuth()

  const trackEvent = (eventName: string, params?: { [key: string]: any }) => {
    lowTractEvent({ eventName, params, user })
  }

  return { trackEvent }
}

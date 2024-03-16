import posthog from 'posthog-js'
import { ENV } from '../config/environments/currentEnv'

export const initAnalytics = (userId: string) => {
  if (ENV.id === 'production') {
    posthog.init('phc_Ja4C1BqXHkf2RwSdx5VSlWQDvzWJmGuWuUnqwgGc4BL', { api_host: 'https://app.posthog.com' })
    posthog.identify(userId)
  }
}

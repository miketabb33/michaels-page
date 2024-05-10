import { PATH_VALUES } from '../router/pathValues'
import { ENV } from './environments/currentEnv'

export type NavLinkConfig = {
  linkTo: string
  label: string
}

export const navConfig = (): NavLinkConfig[] => {
  const config = [
    { linkTo: PATH_VALUES.home, label: 'Home' },
    { linkTo: PATH_VALUES.pong, label: 'Pong' },
    { linkTo: PATH_VALUES.ticTacToe.base, label: 'T T T' },
  ]

  if (ENV.id !== 'production') {
    const books = { linkTo: PATH_VALUES.recommendedBooks, label: 'Books' }
    config.splice(1, 0, books)
  }

  return config
}

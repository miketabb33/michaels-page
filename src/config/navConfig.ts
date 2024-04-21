export type NavLinkConfig = {
  linkTo: string
  label: string
}

export const navConfig = (): NavLinkConfig[] => {
  const config = [
    { linkTo: '/', label: 'Home' },
    { linkTo: '/pong', label: 'Pong' },
    { linkTo: '/tic-tac-toe', label: 'T T T' },
  ]

  return config
}

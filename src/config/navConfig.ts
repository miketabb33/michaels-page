export type NavLinkConfig = {
  linkTo: string
  label: string
}

export const navConfig: NavLinkConfig[] = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/pong', label: 'Pong' },
]

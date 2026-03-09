import { PATH_VALUES } from '../router/pathValues'

export type NavLinkConfig = {
  linkTo: string
  label: string
}

export const navConfig = (): NavLinkConfig[] => {
  const config = [
    { linkTo: PATH_VALUES.home, label: 'Home' },
    { linkTo: PATH_VALUES.aboutMe, label: 'Me' },
    { linkTo: PATH_VALUES.recommendedBooks, label: 'Books' },
    { linkTo: PATH_VALUES.projects, label: 'Projects' },
  ]

  return config
}

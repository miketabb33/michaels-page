import React from 'react'
import { NavLinkConfig } from '../../../config/navConfig'
import NavMenuLink from './NavMenuLink'

type NavigationMenuProps = {
  navConfig: NavLinkConfig[]
}

const NavigationMenu = ({ navConfig }: NavigationMenuProps) => (
  <>
    {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
      <li key={i}>
        <NavMenuLink linkTo={linkTo}>{label}</NavMenuLink>
      </li>
    ))}
  </>
)

export default NavigationMenu

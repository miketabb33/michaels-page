import React from 'react'
import { NavLinkConfig } from '../../../config/navConfig'
import SidebarLink from './SidebarLink'

type SidebarMenuProps = {
  navConfig: NavLinkConfig[]
}

const SidebarMenu = ({ navConfig }: SidebarMenuProps) => (
  <>
    {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
      <li key={i}>
        <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
      </li>
    ))}
  </>
)

export default SidebarMenu

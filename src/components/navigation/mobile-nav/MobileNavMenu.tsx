import React from 'react'
import styled from 'styled-components'
import MobileNavLink from './MobileNavLink'
import { NavLinkConfig } from '../../../config/navConfig'

const MobileNavMenuElement = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  height: inherit;
`

const MobileNavMenuItem = styled.li`
  height: inherit;
  width: ${({ theme }) => theme.spacing.xLarge};
`

type MobileNavMenuProps = {
  navConfig: NavLinkConfig[]
}

const MobileNavMenu = ({ navConfig }: MobileNavMenuProps) => {
  const mobileConfig = [navConfig[0], navConfig[1], navConfig[2], navConfig[3]]
  return (
    <MobileNavMenuElement>
      {mobileConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
        <MobileNavMenuItem key={i}>
          <MobileNavLink linkTo={linkTo}>{label}</MobileNavLink>
        </MobileNavMenuItem>
      ))}
    </MobileNavMenuElement>
  )
}

export default MobileNavMenu

import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../../config/navConfig'
import Button from '../../m-blocks/Button'
import { tabletAndUp } from '../../../Breakpoint'
import MobileNavMenu from './MobileNavMenu'
import LogoLink from '../LogoLink'
import { useNavigationTheme } from '../useNavigationTheme'

export const MOBILE_NAV_HEIGHT = '5rem'

const MobileNavContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  height: ${MOBILE_NAV_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xSmall};

  @media ${tabletAndUp} {
    display: none;
  }
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { themeButtonText, toggleTheme } = useNavigationTheme()

  return (
    <MobileNavContainer>
      <LogoLink size="small" />
      <MobileNavMenu navConfig={navConfig} />
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </MobileNavContainer>
  )
}

export default MobileNav

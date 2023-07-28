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
  padding: ${({ theme }) => theme.spacing.xxSmall};

  @media ${tabletAndUp} {
    display: none;
  }
`

const Side = styled.div`
  width: 10rem;
  height: 100%;
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { themeButtonText, toggleTheme } = useNavigationTheme()

  return (
    <MobileNavContainer>
      <Side>
        <LogoLink />
      </Side>

      <MobileNavMenu navConfig={navConfig} />
      <Side>
        <Button onClick={toggleTheme}>{themeButtonText}</Button>
      </Side>
    </MobileNavContainer>
  )
}

export default MobileNav

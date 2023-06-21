import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useTheme } from '../../context/ThemeContext'
import RouterLink from '../../router/RouterLink'
import Button from '../m-blocks/Button'
import MobileNavLink from './MobileNavLink'
import { Breakpoint, MQ } from '../../Breakpoint'

const MobileNavContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xSmall};

  @media ${MQ(Breakpoint.tablet)} {
    display: none;
  }
`

const MobileNavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  height: inherit;
`

const MobileNavMenuItem = styled.li`
  height: inherit;
  width: ${({ theme }) => theme.spacing.xLarge};
`

const Logo = styled.img`
  height: 100%;
  aspect-ratio: 1;
`

const LogoLink = styled(RouterLink)`
  width: ${({ theme }) => theme.spacing.xxLarge};
  height: 100%;
  aspect-ratio: 1;
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { theme, toggleTheme } = useTheme()
  const themeButtonText = theme === 'light' ? 'Dark' : 'Light'

  return (
    <MobileNavContainer>
      <LogoLink linkTo="/">
        <Logo src="images/logo.png" />
      </LogoLink>
      <MobileNavMenu>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <MobileNavMenuItem key={i}>
            <MobileNavLink linkTo={linkTo}>{label}</MobileNavLink>
          </MobileNavMenuItem>
        ))}
      </MobileNavMenu>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </MobileNavContainer>
  )
}

export default MobileNav

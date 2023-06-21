import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import SidebarLink from './SidebarLink'
import { NavLinkConfig } from '../../config/navConfig'
import Button from '../m-blocks/Button'
import RouterLink from '../../router/RouterLink'
import { Breakpoint, MQ } from '../../Breakpoint'

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: ${({ theme }) => theme.shadow.crisp};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.small} 0;

  @media ${MQ(Breakpoint.tablet)} {
    display: flex;
  }
`

const Logo = styled.img`
  width: 60%;
  margin: auto;
`

const LogoLink = styled(RouterLink)`
  display: flex;
  padding: ${({ theme }) => theme.spacing.small};
`

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

type SidebarProps = {
  navConfig: NavLinkConfig[]
}

const Sidebar = ({ navConfig }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme()

  const themeButtonText = theme === 'light' ? 'Dark' : 'Light'

  return (
    <Container>
      <SidebarMenu>
        <LogoLink linkTo="/">
          <Logo src="images/logo.png" />
        </LogoLink>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <li key={i}>
            <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
          </li>
        ))}
      </SidebarMenu>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </Container>
  )
}

export default Sidebar

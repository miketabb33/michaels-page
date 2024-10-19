import React from 'react'
import styled, { css } from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import Button from '../m-blocks/Button'
import { tabLandAndUp } from '../../styles/Responsive'
import LogoLink from './LogoLink'
import NavigationMenu from './navigation-menu/NavigationMenu'
import { useNavigationTheme } from './useNavigationTheme'

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: ${({ theme }) => theme.shadow.crisp};
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.small} 0;
  display: none;

  ${tabLandAndUp(css`
    display: flex;
  `)}
`

const SidebarTopContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

const LogoWell = styled.div`
  padding: 1rem 2rem;
`

type SidebarProps = {
  navConfig: NavLinkConfig[]
}

const Sidebar = ({ navConfig }: SidebarProps) => {
  const { toggleTheme, themeButtonText } = useNavigationTheme()

  return (
    <Container>
      <SidebarTopContent>
        <LogoWell>
          <LogoLink />
        </LogoWell>
        <NavigationMenu navConfig={navConfig} />
      </SidebarTopContent>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </Container>
  )
}

export default Sidebar

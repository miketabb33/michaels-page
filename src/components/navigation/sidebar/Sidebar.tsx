import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../../config/navConfig'
import Button from '../../m-blocks/Button'
import { tabletAndUp } from '../../../Breakpoint'
import LogoLink from '../LogoLink'
import SidebarMenu from './SidebarMenu'
import { useNavigationTheme } from '../useNavigationTheme'

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  box-shadow: ${({ theme }) => theme.shadow.crisp};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.small} 0;

  @media ${tabletAndUp} {
    display: flex;
  }
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
          <LogoLink size="small" />
        </LogoWell>
        <SidebarMenu navConfig={navConfig} />
      </SidebarTopContent>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </Container>
  )
}

export default Sidebar

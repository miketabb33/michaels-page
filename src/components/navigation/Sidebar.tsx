import React from 'react'
import styled, { css } from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import LogoLink from './LogoLink'
import NavigationMenu from './navigation-menu/NavigationMenu'
import { useNavigationTheme } from './useNavigationTheme'
import Button from '../m-blocks/Button'
import Profile from '../profile/profile-regular/Profile'

const Container = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.color.primary},
      ${({ theme }) => theme.color.accent},
      transparent
    );
  }

  ${tabLandAndUp(css`
    display: flex;
  `)}
`

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoWell = styled.div`
  padding: 1.8rem 2rem 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const ProfileSection = styled.div`
  padding: 2.4rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const NavSection = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

const NavLabel = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  padding: 0 2rem 0.8rem;
`

const BottomSection = styled.div`
  padding: 1.6rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: center;
`

type SidebarProps = {
  navConfig: NavLinkConfig[]
}

const Sidebar = ({ navConfig }: SidebarProps) => {
  const { toggleTheme, themeButtonText } = useNavigationTheme()

  return (
    <Container>
      <TopSection>
        <LogoWell>
          <LogoLink />
        </LogoWell>
        <ProfileSection>
          <Profile />
        </ProfileSection>
        <NavSection>
          <NavLabel>Navigate</NavLabel>
          <NavigationMenu navConfig={navConfig} />
        </NavSection>
      </TopSection>
      <BottomSection>
        <Button onClick={toggleTheme}>{themeButtonText} Mode</Button>
      </BottomSection>
    </Container>
  )
}

export default Sidebar

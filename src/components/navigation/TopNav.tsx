import React from 'react'
import styled, { css } from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import LogoLink from './LogoLink'
import NavigationMenu from './navigation-menu/NavigationMenu'
import { useNavigationTheme } from './useNavigationTheme'
import Popup, { usePopup } from '../Popup'

export const TOP_NAV_HEIGHT = '6rem'

const NavContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: ${TOP_NAV_HEIGHT};
  background: ${({ theme }) => theme.color.secondary};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.color.secondaryDark};
`

const NavInner = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

const DesktopLinks = styled.ul`
  display: none;
  align-items: center;
  gap: 0.2rem;
  flex: 1;
  justify-content: center;

  ${tabLandAndUp(css`
    display: flex;
  `)}
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const ThemeIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.35;
  transition: opacity 0.15s, background 0.15s;

  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.color.hover};
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

const DesktopThemeBtn = styled.div`
  display: none;
  ${tabLandAndUp(css`
    display: block;
  `)}
`

const MobileMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  color: ${({ theme }) => theme.color.text};
  border-radius: 0.6rem;
  height: 3.4rem;
  padding: 0 1.4rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.65;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.color.hover};
  }

  ${tabLandAndUp(css`
    display: none;
  `)}
`

const MobileMenuDropdown = styled.ul`
  position: absolute;
  right: 1.6rem;
  top: calc(${TOP_NAV_HEIGHT} - 0.4rem);
  background: ${({ theme }) => theme.color.splash};
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 1.2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  min-width: 18rem;
  padding: 0.6rem 0;
  z-index: 200;
`

const MobileThemeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem 0.6rem;
  border-top: 1px solid ${({ theme }) => theme.color.secondaryDark};
  margin-top: 0.4rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.55;
`

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

type TopNavProps = {
  navConfig: NavLinkConfig[]
}

const TopNav = ({ navConfig }: TopNavProps) => {
  const { toggleTheme, themeButtonText } = useNavigationTheme()
  const popup = usePopup()
  const isDark = themeButtonText === 'Light'

  return (
    <NavContainer>
      <NavInner>
        <LogoLink />
        <DesktopLinks>
          <NavigationMenu navConfig={navConfig} />
        </DesktopLinks>
        <NavActions>
          <DesktopThemeBtn>
            <ThemeIconBtn onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </ThemeIconBtn>
          </DesktopThemeBtn>
          <MobileMenuBtn onClick={popup.click}>Menu</MobileMenuBtn>
        </NavActions>
      </NavInner>
      <Popup {...popup.bind}>
        <MobileMenuDropdown>
          <NavigationMenu navConfig={navConfig} />
          <MobileThemeRow>
            <ThemeIconBtn onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </ThemeIconBtn>
            {isDark ? 'Light mode' : 'Dark mode'}
          </MobileThemeRow>
        </MobileMenuDropdown>
      </Popup>
    </NavContainer>
  )
}

export default TopNav

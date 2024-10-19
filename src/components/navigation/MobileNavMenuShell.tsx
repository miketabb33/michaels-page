import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useNavigationTheme } from './useNavigationTheme'
import NavigationMenu from './navigation-menu/NavigationMenu'
import Button from '../m-blocks/Button'

const MobileNavMenuElement = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.secondary};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  min-width: 20rem;
  padding-bottom: 0.5rem;
  z-index: 100;

  position: absolute;
  right: 0;
  top: 4.9rem;
`

type MobileNavMenuShellProps = {
  navConfig: NavLinkConfig[]
}

const MobileNavMenuShell = ({ navConfig }: MobileNavMenuShellProps) => {
  const { themeButtonText, toggleTheme } = useNavigationTheme()
  return (
    <MobileNavMenuElement>
      <NavigationMenu navConfig={navConfig} />
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </MobileNavMenuElement>
  )
}

export default MobileNavMenuShell

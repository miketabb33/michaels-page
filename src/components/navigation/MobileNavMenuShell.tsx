import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useNavigationTheme } from './useNavigationTheme'
import NavigationMenu from './navigation-menu/NavigationMenu'
import Button from '../m-blocks/Button'

const MobileNavMenuElement = styled.ul`
  background-color: ${({ theme }) => theme.color.secondary};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: none;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  min-width: 20rem;
  padding: 0.6rem 0;
  z-index: 100;

  position: absolute;
  right: 0;
  top: 5.3rem;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 1.6rem 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 0.4rem;
`

type MobileNavMenuShellProps = {
  navConfig: NavLinkConfig[]
}

const MobileNavMenuShell = ({ navConfig }: MobileNavMenuShellProps) => {
  const { themeButtonText, toggleTheme } = useNavigationTheme()
  return (
    <MobileNavMenuElement>
      <NavigationMenu navConfig={navConfig} />
      <ButtonWrap>
        <Button onClick={toggleTheme}>{themeButtonText} Mode</Button>
      </ButtonWrap>
    </MobileNavMenuElement>
  )
}

export default MobileNavMenuShell

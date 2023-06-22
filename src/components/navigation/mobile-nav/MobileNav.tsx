import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../../config/navConfig'
import Button from '../../m-blocks/Button'
import { Breakpoint, MQ } from '../../../Breakpoint'
import MobileNavMenu from './MobileNavMenu'
import LogoLink from '../LogoLink'
import { useNavigationTheme } from '../useNavigationTheme'

const MobileNavContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.secondary};
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xSmall};

  @media ${MQ(Breakpoint.tablet)} {
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

import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useTheme } from '../../context/ThemeContext'
import RouterLink from '../../router/RouterLink'
import { StylesSettings } from '../../styles/Styles'
import Button from '../m-blocks/Button'
import MobileNavLink from './MobileNavLink'

const MobileNavContainer = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.styles.spacing.xSmall};
`

const MobileNavMenu = styled.ul<{ styles: StylesSettings }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.styles.spacing.large};
  height: inherit;
`

const MobileNavMenuItem = styled.li<{ styles: StylesSettings }>`
  height: inherit;
  width: ${(props) => props.styles.spacing.xLarge};
`

const Logo = styled.img`
  height: 100%;
  aspect-ratio: 1;
`

const LogoLink = styled(RouterLink)`
  height: 100%;
  aspect-ratio: 1;
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { styles, toggleTheme } = useTheme()
  const themeButtonText = styles.id === 'light' ? 'Dark' : 'Light'

  return (
    <MobileNavContainer styles={styles}>
      <LogoLink linkTo="/">
        <Logo src="images/logo.png" />
      </LogoLink>
      <MobileNavMenu styles={styles}>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <MobileNavMenuItem styles={styles} key={i}>
            <MobileNavLink linkTo={linkTo}>{label}</MobileNavLink>
          </MobileNavMenuItem>
        ))}
      </MobileNavMenu>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </MobileNavContainer>
  )
}

export default MobileNav

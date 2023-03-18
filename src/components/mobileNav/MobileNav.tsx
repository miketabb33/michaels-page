import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Button from '../mblocks/Button'
import MobileNavLink from './MobileNavLink'

const MobileNavContainer = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  height: ${(props) => props.styles.spacing.large};
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

const ThemeButtonContainer = styled.div<{ styles: StylesSettings }>`
  position: absolute;
  top: 2px;
  right: 2px;
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { styles, toggleTheme } = useStyles()
  const themeButtonText = styles.id === 'light' ? 'Dark' : 'Light'

  return (
    <MobileNavContainer styles={styles}>
      <MobileNavMenu styles={styles}>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <MobileNavMenuItem styles={styles} key={i}>
            <MobileNavLink linkTo={linkTo}>{label}</MobileNavLink>
          </MobileNavMenuItem>
        ))}
      </MobileNavMenu>
      <ThemeButtonContainer styles={styles}>
        <Button onClick={toggleTheme}>{themeButtonText}</Button>
      </ThemeButtonContainer>
    </MobileNavContainer>
  )
}

export default MobileNav

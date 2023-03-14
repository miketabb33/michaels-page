import React from 'react'
import styled from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import MobileNavLink from './MobileNavLink'

const MobileNavStyles = styled.nav<{ styles: StylesSettings }>`
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
  padding: 0;
  width: ${(props) => props.styles.spacing.xLarge};
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileNav = ({ navConfig }: MobileNavProps) => {
  const { styles } = useStyles()

  return (
    <MobileNavStyles styles={styles}>
      <MobileNavMenu styles={styles}>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <MobileNavMenuItem styles={styles} key={i}>
            <MobileNavLink linkTo={linkTo}>{label}</MobileNavLink>
          </MobileNavMenuItem>
        ))}
      </MobileNavMenu>
    </MobileNavStyles>
  )
}

export default MobileNav

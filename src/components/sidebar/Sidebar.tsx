import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import SidebarLink from './SidebarLink'
import { StylesSettings } from '../../styles/Styles'

const HeaderStyles = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  box-shadow: ${(props) => props.styles.shadow.box};
  width: 120px;
  overflow-y: auto;
`

const HeaderMenu = styled.ul<{ styles: StylesSettings }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.styles.spacing.xSmall};
`

type HeaderLinkConfig = {
  linkTo: string
  label: string
}

const headerItems: HeaderLinkConfig[] = [
  { linkTo: '/', label: 'Home' },
  { linkTo: '/pong', label: 'Pong' },
]

const Header = () => {
  const { styles } = useStyles()
  return (
    <HeaderStyles styles={styles}>
      <HeaderMenu styles={styles}>
        {headerItems.map(({ label, linkTo }: HeaderLinkConfig, i) => (
          <li key={i}>
            <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
          </li>
        ))}
      </HeaderMenu>
    </HeaderStyles>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import HeaderLink from './HeaderLink'
import { StylesSettings } from '../../styles/Styles'

const HeaderStyles = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
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
            <HeaderLink linkTo={linkTo}>{label}</HeaderLink>
          </li>
        ))}
      </HeaderMenu>
    </HeaderStyles>
  )
}

export default Header

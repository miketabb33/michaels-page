import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import RouterLink from '../router/RouterLink'
import { StyleSettings } from '../styles/Theme'

const Nav = styled.nav<{ themes: StyleSettings }>`
  background-color: ${(props) => props.themes.themeColor.secondary};
`

const HeaderMenu = styled.ul<{ themes: StyleSettings }>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.themes.spacing.medium};
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
  const { theme } = useTheme()
  return (
    <Nav themes={theme}>
      <HeaderMenu themes={theme}>
        {headerItems.map(({ label, linkTo }: HeaderLinkConfig, i) => (
          <li key={i}>
            <RouterLink linkTo={linkTo}>{label}</RouterLink>
          </li>
        ))}
      </HeaderMenu>
    </Nav>
  )
}

export default Header

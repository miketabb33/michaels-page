import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import SidebarLink from './SidebarLink'
import { StylesSettings } from '../../styles/Styles'
import { NavLinkConfig } from '../../config/navConfig'
import Button from '../m-blocks/Button'
import RouterLink from '../../router/RouterLink'

const Container = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  box-shadow: ${(props) => props.styles.shadow.crisp};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${(props) => props.styles.spacing.small} 0;
`

const Logo = styled.img`
  width: 60%;
  margin: auto;
`

const LogoLink = styled(RouterLink)<{ styles: StylesSettings }>`
  display: flex;
  padding: ${(props) => props.styles.spacing.small};
`

const SidebarMenu = styled.ul<{ styles: StylesSettings }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.styles.spacing.xSmall};
`

type SidebarProps = {
  navConfig: NavLinkConfig[]
}

const Sidebar = ({ navConfig }: SidebarProps) => {
  const { styles, toggleTheme } = useTheme()

  const themeButtonText = styles.id === 'light' ? 'Dark' : 'Light'

  return (
    <Container styles={styles}>
      <SidebarMenu styles={styles}>
        <LogoLink styles={styles} linkTo="/">
          <Logo src="images/logo.png" />
        </LogoLink>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <li key={i}>
            <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
          </li>
        ))}
      </SidebarMenu>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </Container>
  )
}

export default Sidebar

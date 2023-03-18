import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import SidebarLink from './SidebarLink'
import { StylesSettings } from '../../styles/Styles'
import { NavLinkConfig } from '../../config/navConfig'
import Button from '../mblocks/Button'

const SidebarContainer = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  box-shadow: ${(props) => props.styles.shadow.crisp};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const { styles, toggleTheme } = useStyles()

  const themeButtonText = styles.id === 'light' ? 'Dark' : 'Light'

  return (
    <SidebarContainer styles={styles}>
      <SidebarMenu styles={styles}>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <li key={i}>
            <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
          </li>
        ))}
      </SidebarMenu>
      <Button onClick={toggleTheme}>{themeButtonText}</Button>
    </SidebarContainer>
  )
}

export default Sidebar

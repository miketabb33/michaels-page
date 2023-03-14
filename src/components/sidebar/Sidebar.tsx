import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import SidebarLink from './SidebarLink'
import { StylesSettings } from '../../styles/Styles'
import { NavLinkConfig } from '../../config/navConfig'

const SidebarStyles = styled.nav<{ styles: StylesSettings }>`
  background-color: ${(props) => props.styles.themeColor.secondary};
  box-shadow: ${(props) => props.styles.shadow.box};
  width: 120px;
  overflow-y: auto;
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
  const { styles } = useStyles()
  return (
    <SidebarStyles styles={styles}>
      <SidebarMenu styles={styles}>
        {navConfig.map(({ label, linkTo }: NavLinkConfig, i) => (
          <li key={i}>
            <SidebarLink linkTo={linkTo}>{label}</SidebarLink>
          </li>
        ))}
      </SidebarMenu>
    </SidebarStyles>
  )
}

export default Sidebar

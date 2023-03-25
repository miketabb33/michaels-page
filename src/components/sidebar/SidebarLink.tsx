import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { StylesSettings } from '../../styles/Styles'
import { useStyles } from '../../context/StylesContext'
import RouterLink from '../../router/RouterLink'

const Container = styled(RouterLink)<{ styles: StylesSettings }>`
  display: block;
  text-align: center;
  padding: ${(props) => props.styles.spacing.medium} 0;
  background-color: ${(props) => props.styles.themeColor.secondaryLight};
  color: ${(props) => props.styles.staticColor.white};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: ${(props) => props.styles.spacing.xSmall};

  &:hover {
    background-color: ${(props) => props.styles.themeColor.secondaryDark};
  }
`

type SidebarLinkProps = {
  children: ReactNode
  linkTo: string
}

export const SidebarLink = ({ children, linkTo }: SidebarLinkProps) => {
  const { styles } = useStyles()
  return (
    <Container styles={styles} linkTo={linkTo}>
      {children}
    </Container>
  )
}

export default SidebarLink

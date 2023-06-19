import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import RouterLink from '../../router/RouterLink'
import { StylesSettings } from '../../styles/Styles'

const Container = styled(RouterLink)<{ styles: StylesSettings }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${(props) => props.styles.staticColor.white};
  font-weight: 700;

  &:active {
    background-color: ${(props) => props.styles.themeColor.secondaryDark};
  }
`

type MobileNavLinkProps = {
  children: ReactNode
  linkTo: string
}

const MobileNavLink = ({ children, linkTo }: MobileNavLinkProps) => {
  const { styles } = useTheme()
  return (
    <Container styles={styles} linkTo={linkTo}>
      {children}
    </Container>
  )
}

export default MobileNavLink

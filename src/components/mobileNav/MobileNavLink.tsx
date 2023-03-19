import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import RouterLink from '../../router/RouterLink'
import { StylesSettings } from '../../styles/Styles'

const MobileNaveLinkStyles = styled(RouterLink)<{ styles: StylesSettings }>`
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
  const { styles } = useStyles()
  return (
    <MobileNaveLinkStyles styles={styles} linkTo={linkTo}>
      {children}
    </MobileNaveLinkStyles>
  )
}

export default MobileNavLink

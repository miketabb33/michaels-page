import React, { ReactNode } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'
import { StylesSettings } from '../../styles/Styles'
import { useStyles } from '../../context/StylesContext'

type LinkProps = {
  children: ReactNode
  linkTo: string
}

const Link = styled(ReactLink)<{ styles: StylesSettings }>`
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
export const HeaderLink = ({ children, linkTo }: LinkProps) => {
  const { styles } = useStyles()
  return (
    <Link styles={styles} to={linkTo}>
      {children}
    </Link>
  )
}

export default HeaderLink

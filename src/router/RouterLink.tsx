import React, { ReactNode } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { StyleSettings } from '../styles/Theme'

type LinkProps = {
  children: ReactNode
  linkTo: string
}

const Link = styled(ReactLink)<{ themes: StyleSettings }>`
  height: 100%;
  background-color: ${(props) => props.themes.themeColor.secondary};
  color: ${(props) => props.themes.staticColor.white};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: ${(props) => props.themes.spacing.small};

  &:hover {
    background-color: ${(props) => props.themes.themeColor.secondaryLight};
  }
`
export const RouterLink = ({ children, linkTo }: LinkProps) => {
  const { theme } = useTheme()
  return (
    <Link themes={theme} to={linkTo}>
      {children}
    </Link>
  )
}

export default RouterLink

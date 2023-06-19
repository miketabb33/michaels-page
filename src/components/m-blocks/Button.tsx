import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import { StylesSettings } from '../../styles/Styles'
import Typography from './Typography'

const Container = styled.button<{ themes: StylesSettings }>`
  background-color: ${(props) => props.themes.themeColor.primary};
  border: ${(props) => props.themes.themeColor.primaryDark} solid 1px;
  padding: ${(props) => props.themes.spacing.xSmall};
  border-radius: ${(props) => props.themes.spacing.xxSmall};
  cursor: pointer;

  color: ${(props) => props.themes.staticColor.white};
  text-transform: uppercase;
  font-weight: 700;

  :hover {
    background-color: ${(props) => props.themes.themeColor.primaryDark};
  }
`

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  const { styles: theme } = useTheme()
  return (
    <Container themes={theme} onClick={onClick}>
      <Typography kind="p">{children}</Typography>
    </Container>
  )
}

export default Button

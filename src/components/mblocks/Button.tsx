import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'

const ButtonStyles = styled.button<{ themes: StylesSettings }>`
  background-color: ${(props) => props.themes.themeColor.primary};
  border: ${(props) => props.themes.themeColor.primaryDark} solid 1px;
  padding: ${(props) => props.themes.spacing.small};
  border-radius: 8px;
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
  const { styles: theme } = useStyles()
  return (
    <ButtonStyles themes={theme} onClick={onClick}>
      {children}
    </ButtonStyles>
  )
}

export default Button

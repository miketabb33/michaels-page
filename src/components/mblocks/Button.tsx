import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import { ThemeSettings } from '../../types/Theme'

const ButtonStyles = styled.button<{ themes: ThemeSettings }>`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  border: blue solid 1px;
  padding: ${(props) => props.themes.spacing.medium};

  :hover {
    background-color: aqua;
  }
`

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  const { theme } = useTheme()
  return (
    <ButtonStyles themes={theme} onClick={onClick}>
      {children}
    </ButtonStyles>
  )
}

export default Button

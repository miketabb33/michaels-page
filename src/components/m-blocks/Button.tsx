import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.7rem 1.6rem;
  border-radius: 10rem;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.55);
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.04rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.28);
  }
`

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>
}

export default Button

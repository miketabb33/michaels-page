import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  padding: 0.6rem 1.4rem;
  border-radius: 10rem;
  cursor: pointer;

  color: ${({ theme }) => theme.color.text};
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  opacity: 0.65;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.color.primary};
    color: #ffffff;
    border-color: transparent;
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

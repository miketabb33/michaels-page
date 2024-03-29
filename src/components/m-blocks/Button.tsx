import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: ${({ theme }) => theme.color.primaryDark} solid 1px;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.xSmall};
  cursor: pointer;

  color: ${({ theme }) => theme.staticColor.gray_50};
  text-transform: uppercase;
  font-weight: 700;

  :hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
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

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import RouterLink from '../../../router/RouterLink'

const Container = styled(RouterLink)`
  display: block;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium} 0;
  background-color: ${({ theme }) => theme.color.secondaryLight};
  color: ${({ theme }) => theme.staticColor.gray_50};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.spacing.xSmall};

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`

type NavMenuLinkProps = {
  children: ReactNode
  linkTo: string
}

export const NavMenuLink = ({ children, linkTo }: NavMenuLinkProps) => {
  return <Container linkTo={linkTo}>{children}</Container>
}

export default NavMenuLink

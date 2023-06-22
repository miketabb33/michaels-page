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

type SidebarLinkProps = {
  children: ReactNode
  linkTo: string
}

export const SidebarLink = ({ children, linkTo }: SidebarLinkProps) => {
  return <Container linkTo={linkTo}>{children}</Container>
}

export default SidebarLink

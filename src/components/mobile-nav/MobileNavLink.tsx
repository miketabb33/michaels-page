import React, { ReactNode } from 'react'
import styled from 'styled-components'
import RouterLink from '../../router/RouterLink'

const Container = styled(RouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.staticColor.white};
  font-weight: 700;

  &:active {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`

type MobileNavLinkProps = {
  children: ReactNode
  linkTo: string
}

const MobileNavLink = ({ children, linkTo }: MobileNavLinkProps) => {
  return <Container linkTo={linkTo}>{children}</Container>
}

export default MobileNavLink

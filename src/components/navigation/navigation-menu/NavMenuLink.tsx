import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import RouterLink from '../../../router/RouterLink'
import { useRouter } from '../../../router/useRouter'

const Container = styled(RouterLink)<{ $selected: boolean }>`
  display: block;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium} 0;
  background-color: ${({ theme }) => theme.color.secondaryLight};
  color: ${({ theme }) => theme.staticColor.gray_50};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.spacing.xSmall};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: ${({ theme }) => theme.color.primaryLight};
      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLight};
      }
    `}
`

type NavMenuLinkProps = {
  children: ReactNode
  linkTo: string
}

export const NavMenuLink = ({ children, linkTo }: NavMenuLinkProps) => {
  const { isSelected } = useInNavMenuLink(linkTo)
  return (
    <Container linkTo={linkTo} $selected={isSelected}>
      {children}
    </Container>
  )
}

export const useInNavMenuLink = (linkTo: string) => {
  const { pathname } = useRouter()

  return { isSelected: pathname == linkTo }
}

export default NavMenuLink

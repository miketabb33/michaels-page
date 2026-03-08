import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import RouterLink from '../../../router/RouterLink'
import { useRouter } from '../../../router/useRouter'

const Container = styled(RouterLink)<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.2rem;
  white-space: nowrap;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.6;
  border-radius: 0.7rem;
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.color.hover};
    color: ${({ theme }) => theme.color.primary};
  }

  ${({ $selected, theme }) =>
    $selected &&
    css`
      opacity: 1;
      color: ${theme.color.primary};
      background: ${theme.color.hover};
      font-weight: 500;
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

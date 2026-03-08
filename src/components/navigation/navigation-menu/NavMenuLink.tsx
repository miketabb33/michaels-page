import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import RouterLink from '../../../router/RouterLink'
import { useRouter } from '../../../router/useRouter'

const Container = styled(RouterLink)<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.9rem 2rem;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: 0.03rem;
  color: rgba(255, 255, 255, 0.5);
  border-left: 2px solid transparent;
  transition: all 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.9);
    border-left-color: rgba(167, 139, 250, 0.5);
  }

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background: linear-gradient(
        90deg,
        rgba(124, 58, 237, 0.18) 0%,
        rgba(124, 58, 237, 0.04) 100%
      );
      color: #ffffff;
      border-left-color: ${theme.color.primary};
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

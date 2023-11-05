import React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Link = styled.a`
  color: ${({ theme }) => theme.color.primaryLight};
  transition: all 0.2s;

  :hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`

type TextLinkProps = {
  href: string
  children: ReactNode
}

const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  )
}

export default TextLink

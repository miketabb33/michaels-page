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
  openInNewWindow?: boolean
  children: ReactNode
}

const TextLink = ({ href, openInNewWindow = true, children }: TextLinkProps) => {
  const props = openInNewWindow ? { target: '_blank' } : {}
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default TextLink

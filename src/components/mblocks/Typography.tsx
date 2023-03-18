import React, { ReactNode } from 'react'
import styled from 'styled-components'

type TypographyKind = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

const H1 = styled.h1`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const H2 = styled.h2`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const H3 = styled.h3`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const H4 = styled.h4`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const H5 = styled.h5`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const H6 = styled.h6`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`
const P = styled.p`
  color: inherit;
  text-transform: inherit;
  font-weight: inherit;
`

type TypographyProps = {
  kind: TypographyKind
  children: ReactNode
}

const Typography = ({ kind, children }: TypographyProps) => {
  switch (kind) {
    case 'h1':
      return <H1>{children}</H1>
    case 'h2':
      return <H2>{children}</H2>
    case 'h3':
      return <H3>{children}</H3>
    case 'h4':
      return <H4>{children}</H4>
    case 'h5':
      return <H5>{children}</H5>
    case 'h6':
      return <H6>{children}</H6>
    case 'p':
      return <P>{children}</P>
  }
}

export default Typography

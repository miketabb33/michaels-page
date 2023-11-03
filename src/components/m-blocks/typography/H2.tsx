import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledH2Props = {
  $spacing?: SpacingArgs
}

const H2Element = styled.h2<StyledH2Props>`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
  ${({ $spacing }) => spacingController($spacing)}
`

const H2 = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <H2Element $spacing={spacing}>{children}</H2Element>
}

export default H2

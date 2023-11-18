import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledPProps = {
  $spacing?: SpacingArgs
}

const PElement = styled.p<StyledPProps>`
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.color.text};
  ${({ $spacing }) => spacingController($spacing)}
`
const P = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <PElement $spacing={spacing}>{children}</PElement>
}

export default P

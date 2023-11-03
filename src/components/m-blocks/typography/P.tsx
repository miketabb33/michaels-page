import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledPProps = {
  $spacing?: SpacingArgs
}

const PElement = styled.p<StyledPProps>`
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
  ${({ $spacing }) => spacingController($spacing)}
`
const P = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <PElement $spacing={spacing}>{children}</PElement>
}

export default P

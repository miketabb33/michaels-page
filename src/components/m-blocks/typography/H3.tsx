import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledH3Props = {
  spacing?: SpacingArgs
}

const H3Element = styled.h3<StyledH3Props>`
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
  ${({ spacing }) => spacingController(spacing)}
`

const H3 = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <H3Element spacing={spacing}>{children}</H3Element>
}

export default H3

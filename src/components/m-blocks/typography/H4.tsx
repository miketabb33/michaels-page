import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled, { css } from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledH4Props = {
  $spacing?: SpacingArgs
}

const H4Element = styled.h4<StyledH4Props>`
  ${({ theme, $spacing }) => css`
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${theme.color.text};
    ${spacingController($spacing)}
  `}
`

const H4 = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <H4Element $spacing={spacing}>{children}</H4Element>
}

export default H4

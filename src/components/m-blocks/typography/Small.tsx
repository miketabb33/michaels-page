import styled, { css } from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'
import { ChildrenProp } from '../../../types/ChildrenProp'
import React from 'react'

type StyledSmallProps = {
  $spacing?: SpacingArgs
}

const SmallElement = styled.h3<StyledSmallProps>`
  ${({ $spacing }) => css`
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 2rem;
    color: ${({ theme }) => theme.color.accent};

    ${spacingController($spacing)}
  `}
`

const Small = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <SmallElement $spacing={spacing}>{children}</SmallElement>
}

export default Small

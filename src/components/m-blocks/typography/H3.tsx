import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled, { css } from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'
import { LineLimitCount, lineCountLimiter } from './lineCountLimiter'

type StyledH3Props = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H3Element = styled.h3<StyledH3Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 2.4rem;
    line-height: 4.2rem;
    font-weight: 600;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

const H3 = ({ children, spacing, lineLimit }: ChildrenProp & Spacing & LineLimitCount) => {
  return (
    <H3Element $spacing={spacing} $lineLimit={lineLimit}>
      {children}
    </H3Element>
  )
}

export default H3

import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled, { css } from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'
import { LineLimitCount, lineCountLimiter } from './lineCountLimiter'

type StyledPProps = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const PElement = styled.p<StyledPProps>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: 0.05rem;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`
const P = ({ children, spacing, lineLimit }: ChildrenProp & Spacing & LineLimitCount) => {
  return (
    <PElement $spacing={spacing} $lineLimit={lineLimit}>
      {children}
    </PElement>
  )
}

export default P

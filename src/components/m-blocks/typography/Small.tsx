import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type SmallProps = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const Small = styled.h3<SmallProps>`
  ${({ $spacing, $lineLimit }) => css`
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 2rem;
    color: ${({ theme }) => theme.color.accent};

    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default Small

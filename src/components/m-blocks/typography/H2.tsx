import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H2Props = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H2 = styled.h2<H2Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 3rem;
    line-height: 5rem;
    font-weight: 600;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H2

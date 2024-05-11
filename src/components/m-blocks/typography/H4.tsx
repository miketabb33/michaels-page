import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H4Props = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H4 = styled.h4<H4Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 700;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H4

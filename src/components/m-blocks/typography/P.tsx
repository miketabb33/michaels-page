import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type PProps = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const P = styled.p<PProps>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: 0.05rem;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default P

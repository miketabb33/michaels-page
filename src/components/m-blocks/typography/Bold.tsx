import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type BoldProps = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const Bold = styled.strong<BoldProps>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-weight: 700;
    color: ${theme.staticColor.blue_600};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default Bold

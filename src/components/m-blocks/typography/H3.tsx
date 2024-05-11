import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H3Props = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H3 = styled.h3<H3Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-size: 2.4rem;
    line-height: 4.2rem;
    font-weight: 600;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H3

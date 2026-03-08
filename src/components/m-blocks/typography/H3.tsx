import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H3Props = {
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H3 = styled.h3<H3Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 1.95rem;
    line-height: 1.35;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${theme.color.text};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H3

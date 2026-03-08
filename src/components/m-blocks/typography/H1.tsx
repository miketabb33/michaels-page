import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H1Props = {
  ignoreDarkMode?: boolean
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H1 = styled.h1.withConfig({
  shouldForwardProp: (prop) => !['ignoreDarkMode'].includes(prop),
})<H1Props>`
  ${({ theme, $spacing, $lineLimit }) => css`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 3.2rem;
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: ${theme.color.primary};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H1

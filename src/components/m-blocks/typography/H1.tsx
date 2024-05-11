import styled, { css } from 'styled-components'
import { SpacingArgs, spacingController } from '../spacingController'
import { lineCountLimiter } from './lineCountLimiter'

type H1Props = {
  ignoreDarkMode?: boolean
  $spacing?: SpacingArgs
  $lineLimit?: number
}

const H1 = styled.h1<H1Props>`
  ${({ theme, ignoreDarkMode, $spacing, $lineLimit }) => css`
    font-size: 3.6rem;
    line-height: 6rem;
    font-weight: 600;
    color: ${() => {
      const lightModeColor = theme.staticColor.blue_800
      if (ignoreDarkMode) return lightModeColor
      return theme.color.id === 'light' ? lightModeColor : theme.staticColor.blue_50
    }};
    ${spacingController($spacing)}
    ${lineCountLimiter($lineLimit)}
  `}
`

export default H1

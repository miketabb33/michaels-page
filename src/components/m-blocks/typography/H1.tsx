import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from '../spacingController'

type StyledH1Props = {
  ignoreDarkMode: boolean
  spacing?: SpacingArgs
}

const H1Element = styled.h1<StyledH1Props>`
  ${(props) => css`
    color: ${() => {
      const lightModeColor = props.theme.staticColor.blue_800
      if (props.ignoreDarkMode) return lightModeColor
      return props.theme.color.id === 'light' ? lightModeColor : props.theme.staticColor.blue_50
    }};
    font-weight: 600;
    ${spacingController(props.spacing)}
  `}
`

type H1Props = {
  children: ReactNode
  ignoreDarkMode?: boolean
}

const H1 = ({ children, ignoreDarkMode = false, spacing }: H1Props & Spacing) => {
  return (
    <H1Element ignoreDarkMode={ignoreDarkMode} spacing={spacing}>
      {children}
    </H1Element>
  )
}

export default H1

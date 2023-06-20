import React, { ReactNode } from 'react'
import styled from 'styled-components'

const H1Element = styled.h1<{ ignoreDarkMode: boolean }>`
  color: ${(props) => {
    const lightModeColor = props.theme.staticColor.blue_800
    if (props.ignoreDarkMode) return lightModeColor
    return props.theme.color.id === 'light' ? lightModeColor : props.theme.staticColor.blue_50
  }};
  font-weight: 600;
`

type H1Props = {
  children: ReactNode
  ignoreDarkMode?: boolean
}

const H1 = ({ children, ignoreDarkMode = false }: H1Props) => {
  return <H1Element ignoreDarkMode={ignoreDarkMode}>{children}</H1Element>
}

export default H1

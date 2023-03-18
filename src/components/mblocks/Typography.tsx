import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'

type TypographyVariation = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
type TypographyColor = 'white' | 'black'

const getColor = (styles: StylesSettings, textColor?: TypographyColor) => {
  if (!textColor) return 'inherit'
  if (textColor === 'white') return styles.staticColor.white
  if (textColor === 'black') return styles.staticColor.black
}

type TypographyStyleProps = {
  styles: StylesSettings
  textColor?: TypographyColor
}

const H1 = styled.h1<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const H2 = styled.h2<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const H3 = styled.h3<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const H4 = styled.h4<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const H5 = styled.h5<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const H6 = styled.h6<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`
const P = styled.p<{ styleProps: TypographyStyleProps }>`
  color: ${(props) =>
    getColor(props.styleProps.styles, props.styleProps.textColor)};
`

type TypographyProps = {
  variation: TypographyVariation
  children: ReactNode
  color?: TypographyColor
}

const Typography = ({ variation, children, color }: TypographyProps) => {
  const { styles } = useStyles()

  const styleProps: TypographyStyleProps = {
    styles,
    textColor: color,
  }

  switch (variation) {
    case 'h1':
      return <H1 styleProps={styleProps}>{children}</H1>
    case 'h2':
      return <H2 styleProps={styleProps}>{children}</H2>
    case 'h3':
      return <H3 styleProps={styleProps}>{children}</H3>
    case 'h4':
      return <H4 styleProps={styleProps}>{children}</H4>
    case 'h5':
      return <H5 styleProps={styleProps}>{children}</H5>
    case 'h6':
      return <H6 styleProps={styleProps}>{children}</H6>
    case 'p':
      return <P styleProps={styleProps}>{children}</P>
  }
}

export default Typography

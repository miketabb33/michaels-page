import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ChildrenProp } from '../types/ChildrenProp'
import { spacing, staticColor, shadow, lightThemeColor, darkThemeColor } from '../styles/Styles'
import React from 'react'
import { Theme, useTheme } from './ThemeContext'

const getTheme = (theme: Theme): DefaultTheme => {
  return {
    colors: theme === 'light' ? lightThemeColor : darkThemeColor,
    staticColor,
    spacing,
    shadow,
  }
}

export const StyledProvider = ({ children }: ChildrenProp) => {
  const { theme } = useTheme()
  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
}

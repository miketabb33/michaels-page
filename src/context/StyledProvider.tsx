import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ChildrenProp } from '../types/ChildrenProp'
import { Theme, useTheme } from './ThemeContext'
import { colorTokens } from '../styles/colorTokens'
import { darkThemeColor, lightThemeColor } from '../styles/ThemeColor'
import { themeSpacing } from '../styles/ThemeSpacing'
import { themeShadow } from '../styles/ThemeShadow'
import React from 'react'

const getTheme = (theme: Theme): DefaultTheme => {
  return {
    color: theme === 'light' ? lightThemeColor : darkThemeColor,
    staticColor: colorTokens,
    spacing: themeSpacing,
    shadow: themeShadow,
  }
}

export const StyledProvider = ({ children }: ChildrenProp) => {
  const { theme } = useTheme()
  return <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
}

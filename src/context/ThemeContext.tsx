import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { StylesSettings, lightStyle, darkStyle } from '../styles/Styles'

export type Theme = 'light' | 'dark'

type ThemeContextType = {
  styles: StylesSettings
  theme: Theme
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  styles: lightStyle,
  theme: 'light',
  changeTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const validateTheme: StylesSettings = parseTheme(localStorage.getItem('theme') as Theme)
  const [theme, setTheme] = useState<Theme>(parseTheme2(localStorage.getItem('theme') as Theme))
  const [styles, setStyles] = useState<StylesSettings>(validateTheme)

  const changeTheme = (theme: Theme) => {
    setStyles(parseTheme(theme))
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    changeTheme(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ styles: styles, theme, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const parseTheme = (theme: Theme | null) => {
  if (theme === 'dark') return darkStyle
  return lightStyle
}
const parseTheme2 = (theme: string): Theme => {
  if (theme === 'dark') return 'dark'
  return 'light'
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}

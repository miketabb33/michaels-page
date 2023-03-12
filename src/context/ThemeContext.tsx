import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { Theme, StyleSettings, lightStyle, darkStyle } from '../styles/Theme'

type ThemeContextType = {
  theme: StyleSettings
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightStyle,
  changeTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const validateTheme: StyleSettings = parseTheme(
    localStorage.getItem('theme') as Theme
  )

  const [theme, setTheme] = useState<StyleSettings>(validateTheme)

  const changeTheme = (theme: Theme) => {
    setTheme(parseTheme(theme))
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme.id === 'light' ? 'dark' : 'light'
    changeTheme(nextTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const parseTheme = (theme: Theme | null) => {
  if (theme === 'dark') return darkStyle
  return lightStyle
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}

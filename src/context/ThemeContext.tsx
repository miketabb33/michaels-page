import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'

export type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export const useThemeProvider = () => {
  const THEME_KEY = 'theme'

  const getThemeFromStorage = (): Theme => {
    const fetchedTheme = localStorage.getItem(THEME_KEY)
    if (fetchedTheme === 'dark') return 'dark'
    return 'light'
  }

  const [theme, setTheme] = useState<Theme>(getThemeFromStorage())

  const changeTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem(THEME_KEY, theme)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    changeTheme(nextTheme)
  }

  return { theme, toggleTheme }
}

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const { theme, toggleTheme } = useThemeProvider()
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}

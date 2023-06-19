import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'

export type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const [theme, setTheme] = useState<Theme>(parseTheme(localStorage.getItem('theme') as Theme))

  const changeTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    changeTheme(nextTheme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

const parseTheme = (theme: string): Theme => {
  if (theme === 'dark') return 'dark'
  return 'light'
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}

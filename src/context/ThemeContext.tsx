import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { Theme, ThemeSettings } from '../types/Theme'

const lightTheme: ThemeSettings = {
  id: 'light',
  color: {
    text: '#202124',
  },
  spacing: {
    medium: '2rem',
  },
  fontSize: {
    normal: '1.6rem',
    large: '3rem',
  },
}

const darkTheme: ThemeSettings = {
  id: 'dark',
  color: {
    text: '#c6dd15',
  },
  spacing: {
    medium: '2rem',
  },
  fontSize: {
    normal: '1.6rem',
    large: '3rem',
  },
}

type ThemeContextType = {
  theme: ThemeSettings
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  changeTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const validateTheme: ThemeSettings = parseTheme(
    localStorage.getItem('theme') as Theme
  )

  const [theme, setTheme] = useState<ThemeSettings>(validateTheme)

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
  if (theme === 'dark') return darkTheme
  return lightTheme
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}

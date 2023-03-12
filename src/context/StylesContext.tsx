import React, { useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { Theme, StylesSettings, lightStyle, darkStyle } from '../styles/Styles'

type StylesContextType = {
  styles: StylesSettings
  changeTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const StylesContext = createContext<StylesContextType>({
  styles: lightStyle,
  changeTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeContextProvider = ({ children }: ChildrenProp) => {
  const validateTheme: StylesSettings = parseTheme(
    localStorage.getItem('theme') as Theme
  )

  const [styles, setStyles] = useState<StylesSettings>(validateTheme)

  const changeTheme = (theme: Theme) => {
    setStyles(parseTheme(theme))
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    const nextTheme: Theme = styles.id === 'light' ? 'dark' : 'light'
    changeTheme(nextTheme)
  }

  return (
    <StylesContext.Provider
      value={{ styles: styles, changeTheme, toggleTheme }}
    >
      {children}
    </StylesContext.Provider>
  )
}

const parseTheme = (theme: Theme | null) => {
  if (theme === 'dark') return darkStyle
  return lightStyle
}

export const useStyles = (): StylesContextType => {
  return useContext(StylesContext)
}

import React from 'react'
import { useTheme } from './context/ThemeContext'
import Router from './router/Router'
import GlobalStyle from './styles/GlobalStyles'

const App = () => {
  const { theme } = useTheme()
  return (
    <>
      <GlobalStyle themes={theme} />
      <Router />
    </>
  )
}

export default App

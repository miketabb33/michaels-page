import React from 'react'
import { useTheme } from './context/ThemeContext'
import Router from './router/Router'
import GlobalStyle from './styles/GlobalStyles'

const App = () => {
  const { styles } = useTheme()
  return (
    <>
      <GlobalStyle styles={styles} />
      <Router />
    </>
  )
}

export default App

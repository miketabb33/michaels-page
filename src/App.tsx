import React from 'react'
import { useStyles } from './context/StylesContext'
import Router from './Router'
import GlobalStyle from './styles/GlobalStyles'

const App = () => {
  const { styles } = useStyles()
  return (
    <>
      <GlobalStyle styles={styles} />
      <Router />
    </>
  )
}

export default App

import React from 'react'
import Router from './router/Router'
import GlobalStyle from './styles/GlobalStyles'
import { ThemeContextProvider } from './context/ThemeContext'
import { AuthContextProvider } from './context/AuthContext'
import { StyledProvider } from './context/StyledProvider'

const App = () => (
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <StyledProvider>
          <GlobalStyle />
          <Router />
        </StyledProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

export default App

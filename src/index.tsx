import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext'
import { AuthContextProvider } from './context/AuthContext'
import { StyledProvider } from './context/StyledProvider'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <StyledProvider>
          <App />
        </StyledProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

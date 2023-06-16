import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StylesContextProvider } from './context/StylesContext'
import { AuthContextProvider } from './context/AuthContext'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StylesContextProvider>
        <App />
      </StylesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)

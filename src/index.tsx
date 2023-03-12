import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BreakpointContextProvider } from './context/BreakpointContext'
import { StylesContextProvider } from './context/StylesContext'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <StylesContextProvider>
      <BreakpointContextProvider>
        <App />
      </BreakpointContextProvider>
    </StylesContextProvider>
  </React.StrictMode>
)

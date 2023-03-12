import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'

type Breakpoints = {
  mobile: number
}

const breakpoints: Breakpoints = {
  mobile: 500,
}

type ScreenSize = 'desktop' | 'mobile'

type BreakpointContextType = {
  isMobile: boolean
}

const BreakpointContext = createContext<BreakpointContextType>({
  isMobile: false,
})

export const BreakpointContextProvider = ({ children }: ChildrenProp) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('desktop')

  const isMobile = screenSize === 'mobile'

  const checkScreenSize = () => {
    if (window.innerWidth <= breakpoints.mobile) {
      setScreenSize('mobile')
    } else {
      setScreenSize('desktop')
    }
  }

  useEffect(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <BreakpointContext.Provider value={{ isMobile }}>
      {children}
    </BreakpointContext.Provider>
  )
}

export const useBreakpoint = (): BreakpointContextType => {
  return useContext(BreakpointContext)
}

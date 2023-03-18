import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'

export enum Breakpoint {
  mobileS = 320,
  mobileM = 375,
  mobileL = 425,
  tablet = 768,
  laptop = 1024,
  laptopL = 1440,
  desktop = 2560,
}

export const MQ = (breakpoint: Breakpoint) => {
  return `(min-width: ${breakpoint}px)`
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
    if (window.innerWidth <= Breakpoint.tablet) {
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

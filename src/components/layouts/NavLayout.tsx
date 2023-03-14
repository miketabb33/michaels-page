import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { useBreakpoint } from '../../context/BreakpointContext'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav from '../mobileNav/MobileNav'
import Sidebar from '../sidebar/Sidebar'

const NavLayoutStyles = styled.div`
  display: flex;
  height: 100vh;
`

const ViewPort = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

const NavLayout = ({ children }: ChildrenProp) => {
  const { isMobile } = useBreakpoint()

  if (isMobile) {
    return (
      <>
        <MobileNav navConfig={navConfig} />
        {children}
      </>
    )
  } else {
    return (
      <NavLayoutStyles>
        <Sidebar navConfig={navConfig} />

        <ViewPort>{children}</ViewPort>
      </NavLayoutStyles>
    )
  }
}

export default NavLayout

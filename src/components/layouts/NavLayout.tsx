import React from 'react'
import styled from 'styled-components'
import { useBreakpoint } from '../../context/BreakpointContext'
import { ChildrenProp } from '../../types/ChildrenProp'
import Header from '../sidebar/Sidebar'

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
    return <>{children}</>
  } else {
    return (
      <NavLayoutStyles>
        <Header />

        <ViewPort>{children}</ViewPort>
      </NavLayoutStyles>
    )
  }
}

export default NavLayout

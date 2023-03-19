import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { Breakpoint, MQ } from '../../Breakpoint'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav from '../mobileNav/MobileNav'
import Sidebar from '../sidebar/Sidebar'

const NavLayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media ${MQ(Breakpoint.tablet)} {
    flex-direction: row;
  }
`

const ViewPort = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const SidebarContainer = styled.div`
  min-width: 120px;
  width: 120px;
  display: none;
  @media ${MQ(Breakpoint.tablet)} {
    display: block;
  }
`

const MobileNavContainer = styled.div`
  display: block;
  @media ${MQ(Breakpoint.tablet)} {
    display: none;
  }
`

const NavLayout = ({ children }: ChildrenProp) => {
  return (
    <NavLayoutStyles>
      <MobileNavContainer>
        <MobileNav navConfig={navConfig} />
      </MobileNavContainer>
      <SidebarContainer>
        <Sidebar navConfig={navConfig} />
      </SidebarContainer>
      <ViewPort>{children}</ViewPort>
    </NavLayoutStyles>
  )
}

export default NavLayout

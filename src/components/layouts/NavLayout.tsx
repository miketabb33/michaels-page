import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { Breakpoint, MQ } from '../../Breakpoint'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav from '../mobileNav/MobileNav'
import Sidebar from '../sidebar/Sidebar'

const Container = styled.div`
  overflow-x: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px 1fr;

  @media ${MQ(Breakpoint.tablet)} {
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto;
  }
`

const MobileContainer = styled.div`
  display: block;
  @media ${MQ(Breakpoint.tablet)} {
    display: none;
  }
`

const SidebarContainer = styled.div`
  display: none;
  @media ${MQ(Breakpoint.tablet)} {
    display: block;
  }
`

const NavLayout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <MobileNav navConfig={navConfig} />
        </MobileContainer>
        <SidebarContainer>
          <Sidebar navConfig={navConfig} />
        </SidebarContainer>
        {children}
      </Container>
    </>
  )
}

export default NavLayout

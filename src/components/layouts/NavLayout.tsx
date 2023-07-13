import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { Breakpoint, MQ } from '../../Breakpoint'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav from '../navigation/mobile-nav/MobileNav'
import Sidebar from '../navigation/sidebar/Sidebar'

const Container = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 5rem 1fr;

  @media ${MQ(Breakpoint.tablet)} {
    grid-template-columns: 12rem 1fr;
    grid-template-rows: auto;
  }
`

const Main = styled.main`
  height: 100%;
  overflow-y: auto;
`

const NavLayout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <MobileNav navConfig={navConfig} />
      <Sidebar navConfig={navConfig} />
      <Main>{children}</Main>
    </Container>
  )
}

export default NavLayout

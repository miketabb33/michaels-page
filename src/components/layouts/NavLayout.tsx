import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { Breakpoint, MQ } from '../../Breakpoint'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav from '../mobile-nav/MobileNav'
import Sidebar from '../sidebar/Sidebar'

const Container = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px 1fr;

  @media ${MQ(Breakpoint.tablet)} {
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto;
  }
`

const NavLayout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <MobileNav navConfig={navConfig} />
      <Sidebar navConfig={navConfig} />
      <main>{children}</main>
    </Container>
  )
}

export default NavLayout

import React from 'react'
import styled, { css } from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import { ChildrenProp } from '../../types/ChildrenProp'
import MobileNav, { MOBILE_NAV_HEIGHT } from '../navigation/mobile-nav/MobileNav'
import Sidebar from '../navigation/sidebar/Sidebar'

const Container = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${MOBILE_NAV_HEIGHT} 1fr;

  ${tabLandAndUp(css`
    grid-template-columns: 12rem 1fr;
    grid-template-rows: auto;
  `)}
`

const Main = styled.main`
  height: 100%;
  overflow-y: auto;
`

const NavLayout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <MobileNav navConfig={navConfig()} />
      <Sidebar navConfig={navConfig()} />
      <Main>{children}</Main>
    </Container>
  )
}

export default NavLayout

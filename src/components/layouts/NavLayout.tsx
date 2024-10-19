import React from 'react'
import styled, { css } from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import { ChildrenProp } from '../../types/ChildrenProp'
import Sidebar from '../navigation/Sidebar'
import MobileHeader, { MOBILE_HEADER_HEIGHT } from '../navigation/MobileHeader'

const Container = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${MOBILE_HEADER_HEIGHT} 1fr;

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
  const nav = navConfig()
  return (
    <Container>
      <MobileHeader navConfig={nav} />
      <Sidebar navConfig={nav} />
      <Main>{children}</Main>
    </Container>
  )
}

export default NavLayout

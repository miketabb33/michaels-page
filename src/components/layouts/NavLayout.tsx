import React from 'react'
import styled from 'styled-components'
import { navConfig } from '../../config/navConfig'
import { ChildrenProp } from '../../types/ChildrenProp'
import TopNav from '../navigation/TopNav'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  min-height: 0;
`

const NavLayout = ({ children }: ChildrenProp) => {
  const nav = navConfig()
  return (
    <Container>
      <TopNav navConfig={nav} />
      <Main>{children}</Main>
    </Container>
  )
}

export default NavLayout

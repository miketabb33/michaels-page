import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'
import Header from '../header/Header'

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
  return (
    <NavLayoutStyles>
      <Header />

      <ViewPort>{children}</ViewPort>
    </NavLayoutStyles>
  )
}

export default NavLayout

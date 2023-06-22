import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import PongBoard from '../components/pong/PongBoard'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PongPage = () => {
  return (
    <NavLayout>
      <Container>
        <PongBoard />
      </Container>
    </NavLayout>
  )
}

export default PongPage

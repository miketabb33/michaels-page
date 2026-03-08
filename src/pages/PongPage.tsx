import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import PongBoard from '../components/pong/PongBoard'
import styled from 'styled-components'
import { usePage } from './usePage'
import { TOP_NAV_HEIGHT } from '../components/navigation/TopNav'

const Container = styled.div`
  height: calc(100vh - ${TOP_NAV_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PongPage = () => {
  usePage({ title: 'Pong', description: 'Can you reach the high scores for this take on the classic game "Pong"?' })
  return (
    <NavLayout>
      <Container>
        <PongBoard />
      </Container>
    </NavLayout>
  )
}

export default PongPage

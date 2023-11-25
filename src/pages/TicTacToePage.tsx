import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import styled from 'styled-components'
import { usePage } from './usePage'
import TicTacToeBoard from '../components/tic-tac-toe/TicTacToeBoard'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TicTacToePage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })
  return (
    <NavLayout>
      <Container>
        <TicTacToeBoard />
      </Container>
    </NavLayout>
  )
}

export default TicTacToePage

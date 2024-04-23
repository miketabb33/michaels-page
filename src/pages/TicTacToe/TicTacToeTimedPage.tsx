import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { TicTacToeProvider } from '../../components/tic-tac-toe/TicTacToeProvider'
import { usePage } from '../usePage'
import TicTacToeTimed from '../../components/tic-tac-toe/TicTacToeTimed'

const TicTacToeTimedPage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })

  return (
    <NavLayout>
      <TicTacToeProvider>
        <TicTacToeTimed />
      </TicTacToeProvider>
    </NavLayout>
  )
}

export default TicTacToeTimedPage

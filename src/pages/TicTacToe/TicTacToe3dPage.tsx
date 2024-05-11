import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { TicTacToeProvider } from '../../components/tic-tac-toe/game/TicTacToeProvider'
import { usePage } from '../usePage'
import TicTacToe3d from '../../components/tic-tac-toe/game/TicTacToe3d'

const TicTacToe3dPage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })

  return (
    <NavLayout>
      <TicTacToeProvider>
        <TicTacToe3d />
      </TicTacToeProvider>
    </NavLayout>
  )
}

export default TicTacToe3dPage

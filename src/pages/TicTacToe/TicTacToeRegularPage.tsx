import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { TicTacToeProvider } from '../../components/tic-tac-toe/TicTacToeProvider'
import TicTacToeRegular from '../../components/tic-tac-toe/TicTacToeRegular'
import { usePage } from '../usePage'

const TicTacToeRegularPage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person tic tac toe game designed to be played on the same computer.',
  })

  return (
    <NavLayout>
      <TicTacToeProvider>
        <TicTacToeRegular />
      </TicTacToeProvider>
    </NavLayout>
  )
}

export default TicTacToeRegularPage

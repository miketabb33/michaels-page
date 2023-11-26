import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import TicTacToeBoard from '../components/tic-tac-toe/TicTacToeBoard'

const TicTacToePage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })
  return (
    <NavLayout>
      <TicTacToeBoard />
    </NavLayout>
  )
}

export default TicTacToePage

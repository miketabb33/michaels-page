import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { usePage } from '../usePage'
import TicTacToeMenu from '../../components/tic-tac-toe/TicTacToeMenu'

const TicTacToeMenuPage = () => {
  usePage({
    title: 'Tic Tac Toe Menu',
    description: 'A menu of tic tac toe games.',
  })

  return (
    <NavLayout>
      <TicTacToeMenu />
    </NavLayout>
  )
}

export default TicTacToeMenuPage

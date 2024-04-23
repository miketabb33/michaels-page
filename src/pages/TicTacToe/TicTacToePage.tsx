import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { usePage } from '../usePage'
import Button from '../../components/m-blocks/Button'
import { useRouter } from '../../router/useRouter'

const TicTacToePage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })

  const { navigateToRegular, navigateToTimed } = useInTicTacToePage()
  return (
    <NavLayout>
      <Button onClick={() => navigateToRegular()}>Regular</Button>
      <Button onClick={() => navigateToTimed()}>Timed</Button>
    </NavLayout>
  )
}

const useInTicTacToePage = () => {
  const { navigateTo } = useRouter()
  return { navigateToRegular: () => navigateTo('regular'), navigateToTimed: () => navigateTo('timed') }
}

export default TicTacToePage

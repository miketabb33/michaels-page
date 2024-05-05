import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { usePage } from '../usePage'
import Button from '../../components/m-blocks/Button'
import { useRouter } from '../../router/useRouter'
import H1 from '../../components/m-blocks/typography/H1'
import styled from 'styled-components'
import { PATH_VALUES } from '../../router/pathValues'

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const TicTacToePage = () => {
  usePage({
    title: 'Tic Tac Toe Menu',
    description: 'A menu of tic tac toe games.',
  })

  const { navigateToRegular, navigateToTimed, navigateTo3d } = useInTicTacToePage()
  return (
    <NavLayout>
      <Container>
        <H1>Tic Tac Toe Games</H1>
        <Button onClick={() => navigateToRegular()}>Regular Tic Tac Toe</Button>
        <Button onClick={() => navigateToTimed()}>Timed Tic Tac Toe</Button>
        <Button onClick={() => navigateTo3d()}>3D Tic Tac Toe</Button>
      </Container>
    </NavLayout>
  )
}

export const useInTicTacToePage = () => {
  const { navigateTo } = useRouter()
  return {
    navigateToRegular: () => navigateTo(PATH_VALUES.ticTacToe.regular),
    navigateToTimed: () => navigateTo(PATH_VALUES.ticTacToe.timed),
    navigateTo3d: () => navigateTo(PATH_VALUES.ticTacToe.threeD),
  }
}

export default TicTacToePage

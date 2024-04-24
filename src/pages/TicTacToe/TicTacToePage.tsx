import React from 'react'
import NavLayout from '../../components/layouts/NavLayout'
import { usePage } from '../usePage'
import Button from '../../components/m-blocks/Button'
import { useRouter } from '../../router/useRouter'
import H1 from '../../components/m-blocks/typography/H1'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const TicTacToePage = () => {
  usePage({
    title: 'Tic Tac Toe',
    description: 'A two person 3D timed tic tac toe game designed to be played on the same computer.',
  })

  const { navigateToRegular, navigateToTimed } = useInTicTacToePage()
  return (
    <NavLayout>
      <Container>
        <H1>Tic Tac Toe Games</H1>
        <Button onClick={() => navigateToRegular()}>Regular Tic Tac Toe</Button>
        <Button onClick={() => navigateToTimed()}>Timed Tic Tac Toe</Button>
      </Container>
    </NavLayout>
  )
}

const useInTicTacToePage = () => {
  const { navigateTo } = useRouter()
  return { navigateToRegular: () => navigateTo('regular'), navigateToTimed: () => navigateTo('timed') }
}

export default TicTacToePage

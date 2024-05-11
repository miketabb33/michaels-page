import styled from 'styled-components'
import { useRouter } from '../../router/useRouter'
import React from 'react'
import { H1 } from '../m-blocks/typography'
import { ticTacToeData } from './TicTacToeCardData'
import TicTacToeCard from './TicTacToeCard'
import { PATH_VALUES } from '../../router/pathValues'
import { PageLayout } from '../m-blocks/Layout'

const Layout = styled(PageLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 100rem;
  margin-bottom: 10rem;
`

const TicTacToeMenu = () => {
  const { navigateToRegular, navigateToTimed, navigateTo3d } = useInTicTacToeMenu()
  return (
    <Layout>
      <H1>Tic Tac Toe Games</H1>
      {ticTacToeData.map((data) => {
        let onClick
        if (data.id === 'regular') onClick = navigateToRegular
        else if (data.id === 'timed') onClick = navigateToTimed
        else onClick = navigateTo3d

        return <TicTacToeCard onClick={onClick} key={data.id} data={data} />
      })}
    </Layout>
  )
}

export const useInTicTacToeMenu = () => {
  const { navigateTo } = useRouter()
  return {
    navigateToRegular: () => navigateTo(PATH_VALUES.ticTacToe.regular),
    navigateToTimed: () => navigateTo(PATH_VALUES.ticTacToe.timed),
    navigateTo3d: () => navigateTo(PATH_VALUES.ticTacToe.threeD),
  }
}

export default TicTacToeMenu

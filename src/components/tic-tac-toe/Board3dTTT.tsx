import React from 'react'
import BoardTTT, { BoardTTTProps, useWithBoardTTT } from './BoardTTT'
import styled, { css } from 'styled-components'
import { tabLandAndUp } from '../../styles/Responsive'
import H4 from '../m-blocks/typography/H4'

const Boards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 20rem;
  padding: 2rem 0 0 0;

  ${tabLandAndUp(css`
    flex-direction: row;
    width: 100%;
    gap: 5rem;
    padding: 2rem;
  `)}
`

const BoardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

type Board3dTTTProps = {
  board1Bind: BoardTTTProps
  board2Bind: BoardTTTProps
  board3Bind: BoardTTTProps
}

const Board3dTTT = ({ board1Bind, board2Bind, board3Bind }: Board3dTTTProps) => {
  return (
    <Boards>
      <BoardItem>
        <BoardTTT {...board1Bind} />
        <H4>Top</H4>
      </BoardItem>
      <BoardItem>
        <BoardTTT {...board2Bind} />
        <H4>Middle</H4>
      </BoardItem>
      <BoardItem>
        <BoardTTT {...board3Bind} />
        <H4>Bottom</H4>
      </BoardItem>
    </Boards>
  )
}

export const useWithBoard3dTTT = (onTurnEnd: () => void) => {
  const board1 = useWithBoardTTT(onTurnEnd)
  const board2 = useWithBoardTTT(onTurnEnd)
  const board3 = useWithBoardTTT(onTurnEnd)

  const boards = [board1, board2, board3]

  const reset = () => boards.forEach((b) => b.reset())
  const isFull = () => boards.every((b) => b.isFull())
  const isEmpty = () => boards.every((b) => b.isEmpty())

  const spacesOwned = () => {
    return boards.map((b) => b.spacesOwned()).reduce((a, b) => a + b, 0)
  }

  return {
    bind: {
      board1Bind: board1.bind,
      board2Bind: board2.bind,
      board3Bind: board3.bind,
    },
    squares: [board1.squares, board2.squares, board3.squares],
    reset,
    isFull,
    isEmpty,
    spacesOwned,
  }
}

export default Board3dTTT

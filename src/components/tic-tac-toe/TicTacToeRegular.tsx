import React from 'react'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import BoardTTT, { useWithBoardTTT } from './BoardTTT'
import { checkForWinner } from './winnerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import styled from 'styled-components'
import Button from '../m-blocks/Button'
import InfoBarTTT from './InfoBarTTT'

const BoardPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  padding: 1.5rem;
`

const TicTacToeRegular = () => {
  const onTurnEnd = () => {
    const winner = checkForWinner(board.squares)
    if (winner) {
      engine.setWinner(winner)
      engine.gameOver()
    }
    if (board.isFull()) engine.gameOver()
    if (!engine.isGameOver) engine.nextPlayer()
  }

  const getAnnouncement = () => {
    if (engine.winner) return announcementTextTTT.winner(engine.winner.markerID)
    if (board.isEmpty()) return announcementTextTTT.first(engine.currentPlayer.markerID)
    if (board.isFull()) return announcementTextTTT.draw
    return announcementTextTTT.turn(engine.currentPlayer.markerID)
  }

  const resetGame = () => {
    board.reset()
    engine.reset()
  }

  const engine = useTicTacToe()
  const board = useWithBoardTTT(onTurnEnd)

  return (
    <>
      <InfoBarTTT>
        <AnnouncementTTT announcement={getAnnouncement()} />
      </InfoBarTTT>
      <BoardPosition>
        <BoardTTT {...board.bind} />
        {engine.isGameOver && <Button onClick={resetGame}>Play Again</Button>}
      </BoardPosition>
    </>
  )
}

export default TicTacToeRegular

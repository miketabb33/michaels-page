import React from 'react'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import BoardTTT, { useWithBoardTTT } from './BoardTTT'
import { checkForWinner } from './winnerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import styled from 'styled-components'
import Button from '../m-blocks/Button'

const BoardPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  padding: 1.5rem;
`

const TicTacToeRegular = () => {
  const { isGameOver, currentPlayer, winner, gameOver, nextPlayer, setWinner, reset } = useTicTacToe()

  const onTurnEnd = () => {
    const winner = checkForWinner(board.squares)
    if (winner) {
      setWinner(winner)
      gameOver()
    }
    if (board.isFull()) gameOver()
    if (!isGameOver) nextPlayer()
  }

  const board = useWithBoardTTT(onTurnEnd)

  const getAnnouncement = () => {
    if (winner) return announcementTextTTT.winner(winner.markerID)
    if (board.isEmpty()) return announcementTextTTT.first(currentPlayer.markerID)
    if (board.isFull()) return announcementTextTTT.draw
    return announcementTextTTT.turn(currentPlayer.markerID)
  }

  const resetGame = () => {
    board.reset()
    reset()
  }

  return (
    <>
      <AnnouncementTTT announcement={getAnnouncement()} />
      <BoardPosition>
        <BoardTTT {...board.bind} />
        {isGameOver && <Button onClick={resetGame}>Play Again</Button>}
      </BoardPosition>
    </>
  )
}

export default TicTacToeRegular

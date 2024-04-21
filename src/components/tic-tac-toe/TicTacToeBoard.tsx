import React from 'react'
import InfoBarTTT from './InfoBarTTT'
import TimeInputTTT, { useWithTimeInputTTT } from './timer-display/TimeInputTTT'
import { announcementTextTTT } from './AnnouncementTTT'
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

const TicTacToeBoard = () => {
  const { isGameOver, currentPlayer, players, winner, gameOver, nextPlayer, setWinner, reset } = useTicTacToe()
  const timeInput = useWithTimeInputTTT(false)

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
      <InfoBarTTT
        activePlayer={currentPlayer}
        player1={players[0]}
        player2={players[1]}
        announcement={getAnnouncement()}
        player1RemainingTimeInHundredthsOfSeconds={300}
        player2RemainingTimeInHundredthsOfSeconds={200}
      />
      {/* <TimeInputTTT {...timeInput.bind} /> */}
      <BoardPosition>
        <BoardTTT {...board.bind} />
        {isGameOver && <Button onClick={resetGame}>Play Again</Button>}
      </BoardPosition>
    </>
  )
}

export default TicTacToeBoard

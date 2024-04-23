import React from 'react'
import TimeInputTTT, { useWithTimeInputTTT } from './timer-display/TimeInputTTT'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import BoardTTT, { useWithBoardTTT } from './BoardTTT'
import { checkForWinner } from './winnerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import styled from 'styled-components'
import Button from '../m-blocks/Button'
import TimerDisplayTTT from './timer-display/TimerDisplayTTT'
import InfoBarTTT from './InfoBarTTT'

const BoardPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  padding: 1.5rem;
`

const TicTacToeTimed = () => {
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
      <InfoBarTTT>
        <TimerDisplayTTT player={players[0]} remainingTimeInHundredthsOfSeconds={300} />
        <AnnouncementTTT announcement={getAnnouncement()} />
        <TimerDisplayTTT player={players[1]} remainingTimeInHundredthsOfSeconds={200} />
      </InfoBarTTT>
      <TimeInputTTT {...timeInput.bind} />
      <BoardPosition>
        <BoardTTT {...board.bind} />
        {isGameOver && <Button onClick={resetGame}>Play Again</Button>}
      </BoardPosition>
    </>
  )
}

export default TicTacToeTimed

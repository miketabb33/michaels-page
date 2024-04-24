import React from 'react'
import TimeInputTTT, { useWithTimeInputTTT } from './TimeInputTTT'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import BoardTTT, { useWithBoardTTT } from './BoardTTT'
import { checkForWinner } from './winnerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import styled from 'styled-components'
import Button from '../m-blocks/Button'
import TimerDisplayTTT, { useWithTimerDisplayTTT } from './timer-display/TimerDisplayTTT'
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
  const onTurnEnd = () => {
    if (board.isMove(1)) timeInput.hide()

    if (engine.currentPlayer === engine.players[0]) {
      player2Timer.startTimer()
      player1Timer.stopTimer()
    } else {
      player2Timer.stopTimer()
      player1Timer.startTimer()
    }

    const winner = checkForWinner(board.squares)
    if (winner) {
      engine.setWinner(winner)
      engine.gameOver()
      player1Timer.stopTimer()
      player2Timer.stopTimer()
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
    timeInput.show()
    player1Timer.setTime(1000)
    player2Timer.setTime(1000)
  }

  const timerHit0 = () => {
    engine.gameOver()
    const winner = engine.players.filter((p) => p !== engine.currentPlayer)[0]
    engine.setWinner(winner)
  }

  const engine = useTicTacToe()
  const board = useWithBoardTTT(onTurnEnd)
  const timeInput = useWithTimeInputTTT(false)
  const player1Timer = useWithTimerDisplayTTT(engine.players[0], timerHit0)
  const player2Timer = useWithTimerDisplayTTT(engine.players[1], timerHit0)

  return (
    <>
      <InfoBarTTT>
        <TimerDisplayTTT {...player1Timer.bind} />
        <AnnouncementTTT announcement={getAnnouncement()} />
        <TimerDisplayTTT {...player2Timer.bind} />
      </InfoBarTTT>
      <TimeInputTTT {...timeInput.bind} />
      <BoardPosition>
        <BoardTTT {...board.bind} />
        {engine.isGameOver && <Button onClick={resetGame}>Play Again</Button>}
      </BoardPosition>
    </>
  )
}

export default TicTacToeTimed

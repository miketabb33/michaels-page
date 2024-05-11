import React from 'react'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import BoardTTT, { useWithBoardTTT } from './BoardTTT'
import { checkForWinner } from './winnerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import styled from 'styled-components'
import Button from '../../m-blocks/Button'
import LayoutTTT from './LayoutTTT'

const ContentPosition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
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
      <LayoutTTT InfoBarContent={<AnnouncementTTT announcement={getAnnouncement()} />}>
        <ContentPosition>
          <BoardTTT {...board.bind} />
          {engine.isGameOver && <Button onClick={resetGame}>Play Again</Button>}
        </ContentPosition>
      </LayoutTTT>
    </>
  )
}

export default TicTacToeRegular

import React, { useEffect, useState } from 'react'
import Button from '../../mblocks/Button'
import GameModal from '../../game-blocks/GameModal'
import { HighScore } from '../../../types/HighScore'
import { getHighScores } from '../../../firebase/pongDB'

type PongMenuModalProps = {
  onStart: () => void
}

type ShowingScreen = 'main' | 'highScore'

const PongMenuModal = ({ onStart }: PongMenuModalProps) => {
  const [highScores, setHighScores] = useState<HighScore[]>([])

  useEffect(() => {
    getHighScores()
      .then((results) => {
        setHighScores(results)
      })
      .catch(console.error)
  }, [])

  const { showingScreen, showHighScoreScreen, showMainScreen } = usePongMenuModal()
  const MainScreen = () => (
    <>
      <h1>Welcome to Pong</h1>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={showHighScoreScreen}>High Scores</Button>
    </>
  )

  const HighScoreScreen = () => (
    <>
      <h1>High Scores</h1>
      <ul>
        {highScores.map((highScore) => (
          <li key={highScore.id}>{`${highScore.name}: ${highScore.score}`}</li>
        ))}
      </ul>
      <Button onClick={showMainScreen}>Back</Button>
    </>
  )

  return (
    <GameModal>
      {showingScreen === 'main' && <MainScreen />}
      {showingScreen === 'highScore' && <HighScoreScreen />}
    </GameModal>
  )
}

export default PongMenuModal

export const usePongMenuModal = () => {
  const [showingScreen, setShowingScreen] = useState<ShowingScreen>('main')
  const showMainScreen = () => {
    setShowingScreen('main')
  }

  const showHighScoreScreen = () => {
    setShowingScreen('highScore')
  }
  return { showingScreen, showMainScreen, showHighScoreScreen }
}

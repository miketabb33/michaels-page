import React, { useState } from 'react'
import Button from '../../mblocks/Button'
import GameModal from '../../game-blocks/GameModal'

type PongMenuModalProps = {
  onStart: () => void
}

type ShowingScreen = 'main' | 'highScore'

type HighScore = {
  id: string
  name: string
  score: number
}

const highScores: HighScore[] = [
  {
    id: '1',
    name: 'Shanna',
    score: 10,
  },
  {
    id: '2',
    name: 'Michael',
    score: 5,
  },
  {
    id: '3',
    name: 'Brianna',
    score: 34,
  },
  {
    id: '4',
    name: 'Shawn',
    score: 48,
  },
  {
    id: '5',
    name: 'Laura',
    score: 28,
  },
]

const PongMenuModal = ({ onStart }: PongMenuModalProps) => {
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

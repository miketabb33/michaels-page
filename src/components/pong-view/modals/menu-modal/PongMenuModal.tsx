import React, { useState } from 'react'
import GameModal from '../../../game-blocks/GameModal'
import PongHighScore from './PongHighScore'
import PongMainMenu from './PongMainMenu'

type PongMenuModalProps = {
  onStart: () => void
}

type ShowingScreen = 'main' | 'highScore'

const PongMenuModal = ({ onStart }: PongMenuModalProps) => {
  const { showingScreen, showHighScoreScreen, showMainScreen } = usePongMenu()

  return (
    <GameModal>
      {showingScreen === 'main' && <PongMainMenu clickStart={onStart} clickHighScore={showHighScoreScreen} />}
      {showingScreen === 'highScore' && <PongHighScore clickBack={showMainScreen} />}
    </GameModal>
  )
}

export default PongMenuModal

export const usePongMenu = () => {
  const [showingScreen, setShowingScreen] = useState<ShowingScreen>('main')
  const showMainScreen = () => setShowingScreen('main')
  const showHighScoreScreen = () => setShowingScreen('highScore')

  return { showingScreen, showMainScreen, showHighScoreScreen }
}

import { useState } from 'react'
import { GameState } from '../../../canvas-game/useGameState'
import PongMainMenu from './PongMainMenu'
import React from 'react'
import PongHighScoreMenu from './PongHighScoreMenu'
import PongGameOverMenu from './PongGameOverMenu'

type PongMenuProps = {
  gameState: GameState
  score: number
  startGame: () => void
  resetGame: () => void
}

type MenuState = 'main' | 'gameOver' | 'highScore' | 'none'

const convertToMenuState = (gameState: GameState): MenuState => {
  if (gameState === 'lost' || gameState === 'won') return 'gameOver'
  if (gameState === 'menu') return 'main'
  return 'none'
}

const PongMenu = ({ gameState, score, startGame, resetGame }: PongMenuProps) => {
  const [menu, setMenu] = useState(convertToMenuState(gameState))

  const showHighScore = () => setMenu('highScore')
  const showMain = () => setMenu('main')

  const clickMainMenu = () => {
    showMain()
    resetGame()
  }

  return (
    <>
      {menu === 'main' && <PongMainMenu clickStart={startGame} clickHighScore={showHighScore}></PongMainMenu>}
      {menu === 'highScore' && <PongHighScoreMenu clickBack={showMain} />}
      {menu === 'gameOver' && <PongGameOverMenu clickMainMenu={clickMainMenu} score={score} />}
    </>
  )
}

export default PongMenu

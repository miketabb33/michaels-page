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

const PongMenu = (props: PongMenuProps) => {
  const { menu, score, startGame, onGameOversMainMenu, setMenuToHighScore, setMenuToMain } = usePongMenu(props)
  return (
    <>
      {menu === 'main' && <PongMainMenu clickStart={startGame} clickHighScore={setMenuToHighScore}></PongMainMenu>}
      {menu === 'highScore' && <PongHighScoreMenu onBack={setMenuToMain} />}
      {menu === 'gameOver' && <PongGameOverMenu onReturnToMainMenu={onGameOversMainMenu} score={score} />}
    </>
  )
}

export const usePongMenu = ({ gameState, score, startGame, resetGame }: PongMenuProps) => {
  const convertToMenuState = (gameState: GameState): MenuState => {
    if (gameState === 'lost' || gameState === 'won') return 'gameOver'
    if (gameState === 'menu') return 'main'
    return 'none'
  }
  const [menu, setMenu] = useState(convertToMenuState(gameState))

  const setMenuToHighScore = () => setMenu('highScore')
  const setMenuToMain = () => setMenu('main')

  const onGameOversMainMenu = () => {
    setMenuToMain()
    resetGame()
  }

  return {
    menu,
    score,
    startGame,
    onGameOversMainMenu,
    setMenuToHighScore,
    setMenuToMain,
  }
}

export default PongMenu

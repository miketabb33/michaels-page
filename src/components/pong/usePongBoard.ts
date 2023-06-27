import { useState } from 'react'
import { PongConfig } from '../../canvas-game/pong/config/pongConfigs'
import { KeyboardListener } from '../../canvas-game/KeyboardEventListener'
import { usePong } from '../../canvas-game/pong/usePong'

export const usePongBoard = (initialConfig: PongConfig) => {
  const [pongConfig] = useState(initialConfig)

  const pongBoardDeInit = () => {
    KeyboardListener.removeListeners()
  }

  const {
    gameState,
    startGame,
    score,
    resetGame,
    canvasRef,
    canvasWidth,
    setIsPressingLeftButton,
    setIsPressingRightButton,
  } = usePong({ pongConfig })

  const shouldShowMenu = gameState === 'menu' || gameState === 'lost' || gameState === 'won'

  return {
    shouldShowMenu,
    score,
    pongBoardDeInit,
    pongMenuBind: {
      gameState,
      score,
      startGame,
      resetGame,
    },
    pongCanvasBind: {
      ref: canvasRef,
      id: 'PongCanvas',
    },
    pongControlsBind: {
      width: canvasWidth,
      leftStarted: () => setIsPressingLeftButton(true),
      leftEnded: () => setIsPressingLeftButton(false),
      rightStarted: () => setIsPressingRightButton(true),
      rightEnded: () => setIsPressingRightButton(false),
    },
  }
}

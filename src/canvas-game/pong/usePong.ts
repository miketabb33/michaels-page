import { useEffect } from 'react'
import { getPongConfig } from './pongConfigs'
import { useCanvas } from '../../canvas-game/useCanvas'
import canvasObject from '../../canvas-game/canvasObjectController'
import { useScore } from '../../canvas-game/useScore'
import { pongPlayerActions } from './pongPlayerActions'
import { useGameState } from '../../canvas-game/useGameState'
import { GameRunner } from '../../canvas-game/GameRunner'
import { playerPaddleMotion } from './playerPaddleMotion'
import { pongBallMotion } from './pongBallMotion'
import { didPongHitOpponent, didPongHitPlayPaddle } from './pongCollision'

export const usePong = () => {
  const pongConfig = getPongConfig()
  const { score, incrementScore, resetScore } = useScore()
  const { gameState, setGameState } = useGameState()

  const { setIsPressingLeftButton, setIsPressingRightButton, detectPlayerControls } = pongPlayerActions()

  const { isRectOffCanvas, draw, canvasRef, canvasWidth } = useCanvas({
    sizeMultiplier: 0.8,
    units: pongConfig.canvasDimensionUnits,
  })

  let playerPaddle = canvasObject(pongConfig.playerPaddle)
  let pongBall = canvasObject(pongConfig.pongBall)
  let opponentPaddle = canvasObject(pongConfig.opponentPaddle)

  const onFrame = () => {
    playerPaddleMotion({
      playerPaddle,
      isPlayerOffCanvas: isRectOffCanvas(playerPaddle.getCanvasObject().rect),
      direction: detectPlayerControls(),
    })
    const { didHitBottom, didHitTop } = pongBallMotion({
      pongBall,
      isBallOffCanvas: isRectOffCanvas(pongBall.getCanvasObject().rect),
    })
    const hitPlayerPaddle = didPongHitPlayPaddle(pongBall, playerPaddle)
    didPongHitOpponent(pongBall, opponentPaddle)
    renderPong()

    if (didHitBottom) lose()
    if (didHitTop) win()
    if (hitPlayerPaddle) incrementScore()
  }

  const gameRunner = GameRunner(onFrame)

  const renderPong = () => {
    draw([playerPaddle.getCanvasObject(), opponentPaddle.getCanvasObject(), pongBall.getCanvasObject()])
  }

  const lose = () => {
    setGameState('lost')
    gameRunner.stop()
  }

  const win = () => {
    setGameState('lost')
    gameRunner.stop()
  }

  const startGame = () => {
    gameRunner.start()
    setGameState('playing')
  }

  const resetGame = () => {
    playerPaddle = canvasObject(pongConfig.playerPaddle)
    pongBall = canvasObject(pongConfig.pongBall)
    opponentPaddle = canvasObject(pongConfig.opponentPaddle)
    setGameState('menu')
    resetScore()
    renderPong()
  }

  useEffect(() => {
    renderPong()
  }, [])

  return {
    gameState,
    startGame,
    resetGame,
    score,
    canvasWidth,
    canvasRef,
    setIsPressingLeftButton,
    setIsPressingRightButton,
  }
}

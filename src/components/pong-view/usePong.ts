import { useEffect } from 'react'
import { getPongConfig } from './PongConfig'
import { useCanvas } from '../../canvas-game/useCanvas'
import canvasObject, { CanvasObjectController } from '../../canvas-game/canvasObjectController'
import { collisionDetection } from '../../canvas-game/rect'
import { random } from '../../random'
import { useScore } from '../../canvas-game/useScore'
import { pongPlayerActions } from './pongPlayerActions'
import { useGameState } from '../../canvas-game/useGameState'
import { GameRunner } from '../../canvas-game/GameRunner'
import { pongPlayerBallBouncer } from './pongPlayerBallBouncer'
import { DirectionValue } from '../../types/DirectionValue'

const opponentHitPaddleDirection = () => {
  const randomNum = random(3)
  if (randomNum === 1) return { x: -0.5, y: 0.5 }
  if (randomNum === 2) return { x: 0.5, y: 0.5 }
  return { x: 0, y: 1 }
}

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
    movePlayerPaddle()
    movePongBall()
    didPongHitPlayPaddle()
    didPongHitOpponent()
    renderPong()
  }

  const gameRunner = GameRunner(onFrame)

  const movePlayerPaddle = () => {
    const isPlayerOffCanvas = isRectOffCanvas(playerPaddle.getCanvasObject().rect)
    const direction = detectPlayerControls()
    if (direction === 'left' && isPlayerOffCanvas !== 'left') {
      playerPaddle.changeDirection({ x: -1, y: 0 })
    } else if (direction === 'right' && isPlayerOffCanvas !== 'right') {
      playerPaddle.changeDirection({ x: 1, y: 0 })
    } else {
      playerPaddle.changeDirection({ x: 0, y: 0 })
    }

    playerPaddle.move()
  }

  const pongBallBounce = (pongBall: CanvasObjectController): DirectionValue => {
    const { x, y } = pongBall.getCanvasObject().velocity.directionValue
    const newX = x * -1
    return { x: newX, y }
  }

  const movePongBall = () => {
    const isBallOffCanvas = isRectOffCanvas(pongBall.getCanvasObject().rect)

    //Ball bounce on wall
    if (isBallOffCanvas === 'left' || isBallOffCanvas == 'right') {
      pongBall.changeDirection(pongBallBounce(pongBall))
    }

    pongBall.move()

    //Ball hits game ending wall
    if (isBallOffCanvas === 'down') {
      setGameState('lost')
      gameRunner.stop()
    }

    if (isBallOffCanvas === 'up') {
      setGameState('won')
      gameRunner.stop()
    }
  }

  const didPongHitPlayPaddle = () => {
    const didHitPlayerPaddle = collisionDetection(pongBall.getCanvasObject().rect, playerPaddle.getCanvasObject().rect)
    if (didHitPlayerPaddle) {
      pongPlayerBallBouncer({ playerPaddle, pongBall, bounce: 'round' })
      incrementScore()
    }
  }

  const didPongHitOpponent = () => {
    const didHitOpponentPaddle = collisionDetection(
      pongBall.getCanvasObject().rect,
      opponentPaddle.getCanvasObject().rect
    )
    if (didHitOpponentPaddle) pongBall.changeDirection(opponentHitPaddleDirection())
  }

  const renderPong = () => {
    draw([playerPaddle.getCanvasObject(), opponentPaddle.getCanvasObject(), pongBall.getCanvasObject()])
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

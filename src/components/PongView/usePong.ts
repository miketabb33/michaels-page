import { useEffect } from 'react'
import { getPongConfig } from './PongConfig'
import { useCanvas } from '../../canvas-game/useCanvas'
import canvasObject from '../../canvas-game/canvasObjectController'
import { collisionDetection } from '../../canvas-game/rect'
import { random } from '../../random'
import { GameRunner } from '../../canvas-game/GameRunner'
import { useScore } from '../../canvas-game/useScore'
import { usePongPlayerControls } from './usePongPlayerControls'

const playerHitPaddleDirection = () => {
  const randomNum = random(3)
  if (randomNum === 0) return 'up left'
  if (randomNum === 1) return 'up right'
  return 'up'
}

const opponentHitPaddleDirection = () => {
  const randomNum = random(3)
  if (randomNum === 1) return 'down left'
  if (randomNum === 2) return 'down right'
  return 'down'
}

export const usePong = () => {
  const pongConfig = getPongConfig()
  const { score, incrementScore } = useScore()

  const { setIsPressingLeftButton, setIsPressingRightButton, detectPlayerControls } = usePongPlayerControls()

  const { isRectOffCanvas, draw, canvasRef, canvasWidthReactState } = useCanvas({
    sizeMultiplier: 0.8,
    units: pongConfig.canvasDimensionUnits,
  })

  const playerPaddle = canvasObject(pongConfig.playerPaddle)
  const pongBall = canvasObject(pongConfig.pongBall)
  const opponentPaddle = canvasObject(pongConfig.opponentPaddle)

  const onFrame = () => {
    movePlayerPaddle()
    movePongBall()
    didPongHitPlayPaddle()
    didPongHitOpponent()
    renderPong()
  }

  const { start, pause } = GameRunner(onFrame)

  const movePlayerPaddle = () => {
    const isPlayerOffCanvas = isRectOffCanvas(playerPaddle.getCanvasObject().rect)
    const direction = detectPlayerControls()
    if (direction === 'left' && isPlayerOffCanvas !== 'left') {
      playerPaddle.changeDirection('left')
    } else if (direction === 'right' && isPlayerOffCanvas !== 'right') {
      playerPaddle.changeDirection('right')
    } else {
      playerPaddle.changeDirection('none')
    }
    playerPaddle.move(playerPaddle.getCanvasObject().direction)
  }

  const movePongBall = () => {
    const isBallOffCanvas = isRectOffCanvas(pongBall.getCanvasObject().rect)

    //Ball bounce on wall
    const ballDirection = pongBall.getCanvasObject().direction
    if (isBallOffCanvas === 'left') {
      if (ballDirection === 'down left') pongBall.changeDirection('down right')
      if (ballDirection === 'up left') pongBall.changeDirection('up right')
    }

    if (isBallOffCanvas === 'right') {
      if (ballDirection === 'down right') pongBall.changeDirection('down left')
      if (ballDirection === 'up right') pongBall.changeDirection('up left')
    }

    //Ball hits game ending wall
    if (isBallOffCanvas === 'down') {
      alert('YOU LOSE')
      pause()
    }

    if (isBallOffCanvas === 'up') {
      alert('YOU WIN')
      pause()
    }

    pongBall.move(pongBall.getCanvasObject().direction)
  }

  const didPongHitPlayPaddle = () => {
    const didHitPlayerPaddle = collisionDetection(pongBall.getCanvasObject().rect, playerPaddle.getCanvasObject().rect)
    if (didHitPlayerPaddle) {
      pongBall.changeDirection(playerHitPaddleDirection())
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
    draw([playerPaddle.getCanvasObject(), pongBall.getCanvasObject(), opponentPaddle.getCanvasObject()])
  }

  useEffect(() => {
    renderPong()
    start()
  }, [])

  return { score, canvasWidthReactState, canvasRef, setIsPressingLeftButton, setIsPressingRightButton }
}

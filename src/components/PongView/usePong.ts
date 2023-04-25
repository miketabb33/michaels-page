import { useEffect } from 'react'
import { getPongConfig } from './PongConfig'
import { useCanvas } from '../../canvas-game/useCanvas'
import canvasObject, { DirectionValue } from '../../canvas-game/canvasObjectController'
import { collisionDetection } from '../../canvas-game/rect'
import { random } from '../../random'
import { GameRunner } from '../../canvas-game/GameRunner'
import { useScore } from '../../canvas-game/useScore'
import { usePongPlayerControls } from './usePongPlayerControls'

const playerHitPaddleDirection = (): DirectionValue => {
  const randomNum = random(3)
  if (randomNum === 0) return { x: -0.5, y: -0.5 }
  if (randomNum === 1) return { x: 0.5, y: -0.5 }
  return { x: 0, y: -1 }
}

const opponentHitPaddleDirection = () => {
  const randomNum = random(3)
  if (randomNum === 1) return { x: -0.5, y: 0.5 }
  if (randomNum === 2) return { x: 0.5, y: 0.5 }
  return { x: 0, y: 1 }
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
      playerPaddle.changeDirection({ x: -1, y: 0 })
    } else if (direction === 'right' && isPlayerOffCanvas !== 'right') {
      playerPaddle.changeDirection({ x: 1, y: 0 })
    } else {
      playerPaddle.changeDirection({ x: 0, y: 0 })
    }

    playerPaddle.move()
  }

  const movePongBall = () => {
    const isBallOffCanvas = isRectOffCanvas(pongBall.getCanvasObject().rect)

    //Ball bounce on wall
    const { x: bx, y: by } = pongBall.getCanvasObject().velocity.directionValue
    if (isBallOffCanvas === 'left') {
      if (bx < 0 && by > 0) pongBall.changeDirection({ x: 0.5, y: 0.5 })
      if (bx < 0 && by < 0) pongBall.changeDirection({ x: 0.5, y: -0.5 })
    }

    if (isBallOffCanvas === 'right') {
      if (bx > 0 && by > 0) pongBall.changeDirection({ x: -0.5, y: 0.5 })
      if (bx > 0 && by < 0) pongBall.changeDirection({ x: -0.5, y: -0.5 })
    }

    pongBall.move()

    //Ball hits game ending wall
    if (isBallOffCanvas === 'down') {
      alert('YOU LOSE')
      pause()
    }

    if (isBallOffCanvas === 'up') {
      alert('YOU WIN')
      pause()
    }
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

import { useEffect } from 'react'
import { useCanvas } from '../../canvas-game/useCanvas'
import canvasObject from '../../canvas-game/canvasObjectController'
import { useScore } from '../useScore'
import { pongPlayerActions } from './pongPlayerActions'
import { useGameState } from '../../canvas-game/useGameState'
import { GameRunner } from '../../canvas-game/GameRunner'
import { getUserPaddleDirection } from './getUserPaddleDirection'
import { PongConfig } from './config/pongConfigs'
import { soccerField } from './config/soccerFieldConfig'
import { flipDirection } from '../directionalValue'
import { collisionDetection } from '../rect'
import { pongPaddleBouncer } from './pongPaddleBouncer'

type UsePong = {
  pongConfig: PongConfig
}

export const usePong = ({ pongConfig }: UsePong) => {
  const { score, inGameScore, incrementScore, resetScore } = useScore()
  const { gameState, setGameState } = useGameState()
  const isPlayerPaddleHittable = { value: true }

  const { detectPlayerControls } = pongPlayerActions()

  const { isRectOffCanvas, draw, canvasRef, canvasWidth, translateCanvasObjToRenderableObj } = useCanvas({
    sizeMultiplier: 0.8,
    units: pongConfig.canvasDimensionUnits,
  })

  let playerPaddle = canvasObject(pongConfig.playerPaddle)
  let pongBall = canvasObject(pongConfig.pongBall)
  let opponentPaddle = canvasObject(pongConfig.opponentPaddle)

  const onFrame = () => {
    paddleMotion()
    pongBallMotion()
    handlePaddleCollision()
    pongConfig.didFireFrame({ playerPaddle, pongBall, opponentPaddle, score: inGameScore.value })
    renderPong()
  }

  const paddleMotion = () => {
    const paddleDirection = getUserPaddleDirection({
      isPlayerOffCanvas: isRectOffCanvas(playerPaddle.canvasObj().rect),
      direction: detectPlayerControls(),
    })
    playerPaddle.changeDirection(paddleDirection)
    playerPaddle.move()
  }

  const pongBallMotion = () => {
    const isBallOffCanvas = isRectOffCanvas(pongBall.canvasObj().rect)

    if (isBallOffCanvas === 'left' || isBallOffCanvas == 'right') {
      const newDirection = flipDirection({ value: pongBall.canvasObj().velocity.directionValue, flipX: true })
      pongBall.changeDirection(newDirection)
    }

    if (isBallOffCanvas === 'down') lose()
    if (isBallOffCanvas === 'up') win()

    pongBall.move()
  }

  const handlePaddleCollision = () => {
    handleOpponentPaddleCollision()
    if (isPlayerPaddleHittable.value) {
      handlePlayerPaddleCollision()
    }
  }

  const handleOpponentPaddleCollision = () => {
    const didHitOpponentPaddle = collisionDetection(pongBall.canvasObj().rect, opponentPaddle.canvasObj().rect)
    if (didHitOpponentPaddle) {
      const newDirection = pongPaddleBouncer({
        paddle: opponentPaddle.canvasObj(),
        pongBall: pongBall.canvasObj(),
        bounce: 'natural',
      })
      pongBall.changeDirection(newDirection)
      isPlayerPaddleHittable.value = true
    }
  }

  const handlePlayerPaddleCollision = () => {
    const didHitPlayerPaddle = collisionDetection(pongBall.canvasObj().rect, playerPaddle.canvasObj().rect)
    if (didHitPlayerPaddle) {
      const newDirection = pongPaddleBouncer({
        paddle: playerPaddle.canvasObj(),
        pongBall: pongBall.canvasObj(),
        bounce: 'relative',
      })
      pongBall.changeDirection(newDirection)
      incrementScore()
      isPlayerPaddleHittable.value = false
    }
  }

  const gameRunner = GameRunner(onFrame)

  const renderPong = () => {
    const gamePieces = translateCanvasObjToRenderableObj([
      playerPaddle.canvasObj(),
      opponentPaddle.canvasObj(),
      pongBall.canvasObj(),
    ])

    draw([...soccerField(pongConfig.canvasDimensionUnits), ...gamePieces])
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
  }
}

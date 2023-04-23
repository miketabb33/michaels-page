import React, { useEffect, useState } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { useCanvas } from '../../canvas-game/useCanvas'
import { getPongConfig } from './PongConfig'
import { GameRunner } from '../../canvas-game/GameRunner'
import { random } from '../../random'
import PongControls from './PongControls'
import canvasObject from '../../canvas-game/canvasObjectController'
import { useGameKeyboard } from '../../canvas-game/useGameKeyboard'
import { collisionDetection } from '../../canvas-game/rectController'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PongCanvas = styled.canvas<{ styles: StylesSettings }>`
  border: 1px solid ${(props) => props.styles.themeColor.accent};
  background-color: ${(props) => props.styles.staticColor.black};
`

const PongBoardView = () => {
  const pongConfig = getPongConfig()
  const [score, setScore] = useState(0)
  let inGameScore = 0
  let isPressingLeftButton = false
  let isPressingRightButton = false

  const { styles } = useStyles()
  const { isRectOffCanvas, draw, canvasRef, widthReact } = useCanvas(0.8, pongConfig.canvasDimensionUnits)

  const playerPaddle = canvasObject(pongConfig.playerPaddle)
  const pongBall = canvasObject(pongConfig.pongBall)
  const opponentPaddle = canvasObject(pongConfig.opponentPaddle)

  const { isPressingLeftKey, isPressingRightKey } = useGameKeyboard()

  const scoreChanged = (score: number) => setScore(score)

  const onFrame = () => {
    //Player Paddle
    const isPlayerOffCanvas = isRectOffCanvas(playerPaddle.getCanvasObject().rect)
    if ((isPressingLeftKey() || isPressingLeftButton) && isPlayerOffCanvas !== 'left') {
      playerPaddle.changeDirection('left')
    } else if ((isPressingRightKey() || isPressingRightButton) && isPlayerOffCanvas !== 'right') {
      playerPaddle.changeDirection('right')
    } else {
      playerPaddle.changeDirection('none')
    }

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

    //Ball hits paddles
    const didHitPlayerPaddle = collisionDetection(pongBall.getCanvasObject().rect, playerPaddle.getCanvasObject().rect)
    if (didHitPlayerPaddle) {
      pongBall.changeDirection(playerHitPaddleDirection())
      inGameScore += 1
      scoreChanged(inGameScore)
    }

    const didHitOpponentPaddle = collisionDetection(
      pongBall.getCanvasObject().rect,
      opponentPaddle.getCanvasObject().rect
    )
    if (didHitOpponentPaddle) pongBall.changeDirection(opponentHitPaddleDirection())

    playerPaddle.move(playerPaddle.getCanvasObject().direction)
    pongBall.move(pongBall.getCanvasObject().direction)

    renderPong()
  }

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

  const { start, pause } = GameRunner(onFrame)

  const renderPong = () => {
    draw([playerPaddle.getCanvasObject(), pongBall.getCanvasObject(), opponentPaddle.getCanvasObject()])
  }

  useEffect(() => {
    renderPong()
    start()
  }, [])

  return (
    <Container>
      <h1>Score: {score} </h1>
      <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
      <PongControls
        width={widthReact}
        leftStarted={() => (isPressingLeftButton = true)}
        leftEnded={() => (isPressingLeftButton = false)}
        rightStarted={() => (isPressingRightButton = true)}
        rightEnded={() => (isPressingRightButton = false)}
      />
    </Container>
  )
}

export default PongBoardView

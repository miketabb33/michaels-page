import React, { useEffect, useState } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { useCanvas } from '../../canvas-game/useCanvas'
import { getPongConfig } from './PongConfig'
import { GameRunner } from '../../canvas-game/GameRunner'
import { random } from '../../random'
import PongControls from './PongControls'
import CanvasObject from '../../canvas-game/CanvasObject'
import { CanvasCollisionDetector } from '../../canvas-game/canvasCollisionDetector'
import { Renderer2dContext } from '../../canvas-game/Renderer2dContext'
import { KeyboardController2 } from '../../canvas-game/KeyboardController2'
import { collisionDetection } from '../../canvas-game/translateRect'

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
  const { binding, canvasRef, widthReact } = useCanvas(0.8)
  const {
    getCanvasObject: getPlayerPaddle,
    move: movePlayer,
    changeDirection: changePlayerDirection,
  } = CanvasObject(pongConfig.playerPaddle)

  const {
    changeDirection: changeBallDirection,
    getCanvasObject: getPongBall,
    move: moveBall,
  } = CanvasObject(pongConfig.pongBall)

  const { getCanvasObject: getOpponent } = CanvasObject(pongConfig.opponentPaddle)

  const { isOffCanvas } = CanvasCollisionDetector(binding)

  const { render } = Renderer2dContext(binding, 1000)
  const { isPressingLeftKey, isPressingRightKey } = KeyboardController2()

  const scoreChanged = (score: number) => setScore(score)

  const onFrame = () => {
    //Player Paddle
    const isPlayerOffCanvas = isOffCanvas(getPlayerPaddle())
    if ((isPressingLeftKey() || isPressingLeftButton) && isPlayerOffCanvas !== 'left') {
      changePlayerDirection('left')
    } else if ((isPressingRightKey() || isPressingRightButton) && isPlayerOffCanvas !== 'right') {
      changePlayerDirection('right')
    } else {
      changePlayerDirection('none')
    }

    const isBallOffCanvas = isOffCanvas(getPongBall())
    //Ball bounce on wall
    const ballDirection = getPongBall().direction
    if (isBallOffCanvas === 'left') {
      if (ballDirection === 'down left') changeBallDirection('down right')
      if (ballDirection === 'up left') changeBallDirection('up right')
    }

    if (isBallOffCanvas === 'right') {
      if (ballDirection === 'down right') changeBallDirection('down left')
      if (ballDirection === 'up right') changeBallDirection('up left')
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
    const didHitPlayerPaddle = collisionDetection(getPongBall().rect, getPlayerPaddle().rect)
    if (didHitPlayerPaddle) {
      changeBallDirection(playerHitPaddleDirection())
      inGameScore += 1
      scoreChanged(inGameScore)
    }

    const didHitOpponentPaddle = collisionDetection(getPongBall().rect, getOpponent().rect)
    if (didHitOpponentPaddle) changeBallDirection(opponentHitPaddleDirection())

    movePlayer(getPlayerPaddle().direction)
    moveBall(getPongBall().direction)

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
    render([getPlayerPaddle(), getPongBall(), getOpponent()])
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

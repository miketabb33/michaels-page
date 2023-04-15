import React, { useEffect } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { useCanvas } from '../../pong/useCanvas'
import useCanvasObject from '../../pong/CanvasObject'
import { getPongConfig } from '../../pong/PongConfig'
import { useGameRunner } from '../../canvas-game/GameRunner'
import { renderer2dContext } from './renderer2dContext'
import { keyboardController2 } from '../../canvas-game/keyboardController'
import { CanvasCollisionDetector } from '../../pong/canvasCollisionDetector'

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
  const { styles } = useStyles()
  const { binding, canvasRef } = useCanvas(0.8)
  const { getCanvasObject: getPlayerPaddle, move: movePlayer } = useCanvasObject(pongConfig.playerPaddle)
  const { getCanvasObject: getPongBall } = useCanvasObject(pongConfig.pongBall.canvasObject)
  const { getCanvasObject: getOpponentPaddle } = useCanvasObject(pongConfig.opponentPaddle.canvasObject)
  const { isOffCanvas } = CanvasCollisionDetector(binding)

  const { render } = renderer2dContext(binding, 1000)
  const { isPressingLeft, isPressingRight } = keyboardController2()

  const onFrame = () => {
    const isPlayerOffCanvas = isOffCanvas(getPlayerPaddle())
    if (isPressingLeft() && isPlayerOffCanvas !== 'left') movePlayer('left')
    if (isPressingRight() && isPlayerOffCanvas !== 'right') movePlayer('right')
    renderPong()
  }

  const { start } = useGameRunner(onFrame)

  const renderPong = () => {
    render([getPlayerPaddle(), getPongBall(), getOpponentPaddle()])
  }

  useEffect(() => {
    renderPong()
    start()
  }, [])

  return (
    <Container>
      <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
    </Container>
  )
}

export default PongBoardView

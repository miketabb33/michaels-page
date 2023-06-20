import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PongControls from './PongControls'
import { removeListenersArray } from '../../canvas-game/removeListenersArray'
import PongMenuModal from './menu-modal/PongMenuModal'
import { usePong } from '../../canvas-game/pong/usePong'
import PongGameOverModal from './PongGameOverModal'
import { getPongSoloConfig } from '../../canvas-game/pong/config/soloConfig'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PongCanvas = styled.canvas`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  border: 1px solid ${({ theme }) => theme.color.accent};
  background-color: ${({ theme }) => theme.staticColor.gray_950};
`

const PongBoardView = () => {
  const [score, setScore] = useState(0)
  const [pongConfig] = useState(getPongSoloConfig())

  useEffect(() => {
    return () => {
      removeListenersArray.forEach((r) => r())
    }
  }, [])

  const { gameState, startGame, resetGame, canvasRef, canvasWidth, setIsPressingLeftButton, setIsPressingRightButton } =
    usePong({ pongConfig, onScore: setScore })

  return (
    <Container>
      <h1>Score: {score} </h1>
      <PongCanvas ref={canvasRef} id="PongCanvas" />
      <PongControls
        width={canvasWidth}
        leftStarted={() => setIsPressingLeftButton(true)}
        leftEnded={() => setIsPressingLeftButton(false)}
        rightStarted={() => setIsPressingRightButton(true)}
        rightEnded={() => setIsPressingRightButton(false)}
      />
      {gameState === 'menu' && <PongMenuModal onStart={startGame} />}
      {gameState === 'lost' && <PongGameOverModal clickMainMenu={resetGame} score={score} />}
    </Container>
  )
}

export default PongBoardView

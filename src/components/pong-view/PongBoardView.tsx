import React, { useEffect, useState } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
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

const PongCanvas = styled.canvas<{ styles: StylesSettings }>`
  border: 1px solid ${(props) => props.styles.themeColor.accent};
  background-color: ${(props) => props.styles.staticColor.black};
`

const PongBoardView = () => {
  const [score, setScore] = useState(0)
  const [pongConfig] = useState(getPongSoloConfig())
  const { styles } = useStyles()

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
      <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
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

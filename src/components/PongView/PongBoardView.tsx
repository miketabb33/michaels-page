import React, { useEffect } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import PongControls from './PongControls'
import { usePong } from './usePong'
import PongMenuModal from './modals/PongMenuModal'
import PongLostModal from './modals/PongLostModal'
import { removeListenersArray } from '../../canvas-game/removeListenersArray'

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
  const { styles } = useStyles()

  useEffect(() => {
    return () => {
      removeListenersArray.forEach((r) => r())
    }
  }, [])

  const {
    gameState,
    startGame,
    resetGame,
    score,
    canvasRef,
    canvasWidth,
    setIsPressingLeftButton,
    setIsPressingRightButton,
  } = usePong()

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
      {gameState === 'lost' && <PongLostModal onMainMenu={resetGame} />}
    </Container>
  )
}

export default PongBoardView

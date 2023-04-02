import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import GameButton from '../gameblocks/GameButton'
import Typography from '../mblocks/Typography'
import { usePong } from './usePong'

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

const PongControls = styled.div<{ width: number }>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => `${props.width}px`};
  height: 50px;
`

const PongView = () => {
  const { styles } = useStyles()
  const { pongPageRef, canvasRef, controlsWidth, pongGame, score } = usePong()

  return (
    <Container ref={pongPageRef}>
      <Typography kind="h1">{score}</Typography>
      <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
      {!!pongGame && (
        <PongControls width={controlsWidth}>
          <GameButton onPressStart={() => pongGame.pressLeft()} onPressEnd={() => pongGame.releaseLeft()}>
            Left
          </GameButton>
          <GameButton onPressStart={() => pongGame.pressRight()} onPressEnd={() => pongGame.releaseRight()}>
            Right
          </GameButton>
        </PongControls>
      )}
    </Container>
  )
}

export default PongView

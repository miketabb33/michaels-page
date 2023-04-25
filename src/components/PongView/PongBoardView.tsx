import React, { useState } from 'react'
import { StylesSettings } from '../../styles/Styles'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import PongControls from './PongControls'
import { usePong } from './usePong'
import PongMenu from './PongMenu'

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
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLose, setIsLose] = useState(false)

  const onWin = () => {
    console.log('You Win!')
  }
  const onLose = () => {
    gameRunner.stop()
    setIsLose(true)
  }

  const { gameRunner, score, canvasRef, canvasWidthReactState, setIsPressingLeftButton, setIsPressingRightButton } =
    usePong({ onWin, onLose })

  return (
    <Container>
      <h1>Score: {score} </h1>
      <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
      <PongControls
        width={canvasWidthReactState}
        leftStarted={() => setIsPressingLeftButton(true)}
        leftEnded={() => setIsPressingLeftButton(false)}
        rightStarted={() => setIsPressingRightButton(true)}
        rightEnded={() => setIsPressingRightButton(false)}
      />
      {!isPlaying && (
        <PongMenu
          onStart={() => {
            setIsPlaying(true)
            gameRunner.start()
          }}
        />
      )}
      {isLose && <h1>You Lose!</h1>}
    </Container>
  )
}

export default PongBoardView

import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import GameButton from '../components/mblocks/GameButton'
import { useStyles } from '../context/StylesContext'
import { translateCanvas } from '../pong/canvas'
import PongGame from '../pong/PongGame'
import { StylesSettings } from '../styles/Styles'

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

const Pong = () => {
  const { styles } = useStyles()

  const [pongGame, setPongGame] = useState<PongGame | null>(null)
  const [controlsWidth, setControlsWidth] = useState(0)

  const pongPageRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPongGame(new PongGame(canvasRef.current!, styles))
  }, [canvasRef])

  const resizeCanvas = useCallback(() => {
    const width = pongPageRef.current?.clientWidth || 0
    const height = pongPageRef.current?.clientHeight || 0
    const size = translateCanvas({ width, height })
    pongGame?.renderGame({ width: size, height: size })
    setControlsWidth(size)
  }, [pongGame])

  const onKeydown = (e: KeyboardEvent) => {
    const { isPressingLeft, isPressingRight } = keyboardController(e)
    if (isPressingRight) pongGame?.pressRight()
    if (isPressingLeft) pongGame?.pressLeft()
  }

  const onKeyup = (e: KeyboardEvent) => {
    const { isPressingLeft, isPressingRight } = keyboardController(e)
    if (isPressingRight) pongGame?.releaseRight()
    if (isPressingLeft) pongGame?.releaseLeft()
  }

  useEffect(() => {
    resizeCanvas()
    addEventListener('resize', resizeCanvas)
    addEventListener('keydown', onKeydown)
    addEventListener('keyup', onKeyup)
    pongGame?.start()

    return () => {
      removeEventListener('resize', resizeCanvas)
      removeEventListener('keydown', onKeydown)
      removeEventListener('keyup', onKeyup)
    }
  }, [resizeCanvas])

  return (
    <NavLayout>
      <Container ref={pongPageRef}>
        <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
        {!!pongGame && (
          <PongControls width={controlsWidth}>
            <GameButton
              onPressStart={() => pongGame.pressLeft()}
              onPressEnd={() => pongGame.releaseLeft()}
            >
              Left
            </GameButton>
            <GameButton
              onPressStart={() => pongGame.pressRight()}
              onPressEnd={() => pongGame.releaseRight()}
            >
              Right
            </GameButton>
          </PongControls>
        )}
      </Container>
    </NavLayout>
  )
}

export default Pong

const keyboardController = (e: KeyboardEvent) => {
  const isDKey = e.code === 'KeyD'
  const isArrowRightKey = e.code === 'ArrowRight'

  const isAKey = e.code === 'KeyA'
  const isArrowLeftKey = e.code === 'ArrowLeft'

  const isPressingLeft = isAKey || isArrowLeftKey
  const isPressingRight = isDKey || isArrowRightKey

  return {
    isPressingLeft,
    isPressingRight,
  }
}

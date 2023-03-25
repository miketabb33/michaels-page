import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import { useStyles } from '../context/StylesContext'
import PongGame from '../pong/PongGame'
import { StylesSettings } from '../styles/Styles'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PongCanvas = styled.canvas<{ styles: StylesSettings }>`
  border: 1px solid ${(props) => props.styles.themeColor.accent};
  background-color: ${(props) => props.styles.staticColor.black};
`

const Pong = () => {
  const { styles } = useStyles()

  const [pongGame, setPongGame] = useState<PongGame | null>(null)

  const pongPageRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPongGame(new PongGame(canvasRef.current!, styles))
  }, [])

  const resizeCanvas = useCallback(() => {
    const width = pongPageRef.current?.clientWidth || 0
    const height = pongPageRef.current?.clientHeight || 0
    pongGame?.renderGame({ width, height })
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
  }, [resizeCanvas, pongPageRef])

  return (
    <NavLayout>
      <Container ref={pongPageRef}>
        <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
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

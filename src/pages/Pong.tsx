import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import { useStyles } from '../context/StylesContext'
import PongGame from '../pong/PongGame'
import { StylesSettings } from '../styles/Styles'

const PongPageContainer = styled.div`
  position: relative;
  height: 95vh;
`

const PongCanvas = styled.canvas<{ styles: StylesSettings }>`
  border: 1px solid ${(props) => props.styles.themeColor.accent};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  useEffect(() => {
    resizeCanvas()
    addEventListener('resize', resizeCanvas)
    return () => removeEventListener('resize', resizeCanvas)
  }, [resizeCanvas])

  return (
    <NavLayout>
      <PongPageContainer ref={pongPageRef}>
        <PongCanvas ref={canvasRef} styles={styles} id="PongCanvas" />
      </PongPageContainer>
    </NavLayout>
  )
}

export default Pong

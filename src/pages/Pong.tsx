import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getCanvasSize } from '../canvas'
import NavLayout from '../components/layouts/NavLayout'
import { useStyles } from '../context/StylesContext'
import { StylesSettings } from '../styles/Styles'
import { Size } from '../types/Size'

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

class PongGame {
  canvas: HTMLCanvasElement
  styles: StylesSettings

  constructor(canvas: HTMLCanvasElement, styles: StylesSettings) {
    this.canvas = canvas
    this.styles = styles

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = styles.themeColor.primaryLight
    ctx.fillRect(0, 0, 80, 15)
  }

  updateCanvasSize = (superViewSize: Size) => {
    const calculatedSize = getCanvasSize(superViewSize)
    this.canvas.width = calculatedSize
    this.canvas.height = calculatedSize
  }
}

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
    pongGame?.updateCanvasSize({ width, height })
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

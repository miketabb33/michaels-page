import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import { useStyles } from '../context/StylesContext'
import { StylesSettings } from '../styles/Styles'

const PongPage = styled.div`
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

type Size = {
  width: number
  height: number
}

const getCanvasSize = ({ width, height }: Size) => {
  let calculatedSize

  console.log(`Given Width: ${width}`, `Given Height: ${height}`)
  if (width >= height) {
    calculatedSize = height * 0.9
    console.log('Wider')
  } else {
    console.log('taller')
    calculatedSize = width * 0.9
  }

  return calculatedSize
}

const startPong = (
  canvas: HTMLCanvasElement | null,
  superViewSize: Size,
  styles: StylesSettings
) => {
  console.log(`-----------------`)
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const calculatedSize = getCanvasSize(superViewSize)
  canvas.width = calculatedSize
  canvas.height = calculatedSize

  console.log('canvas width', canvas.width)
  console.log('canvas height', canvas.height)

  ctx.fillStyle = styles.themeColor.primaryLight
  ctx.fillRect(0, 0, 80, 15)
}

const Pong = () => {
  const { styles } = useStyles()

  const pongPageRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const width = pongPageRef.current?.clientWidth || 0
    const height = pongPageRef.current?.clientHeight || 0
    startPong(canvasRef.current, { width, height }, styles)
  }, [])

  return (
    <NavLayout>
      <PongPage ref={pongPageRef}>
        <PongCanvas
          ref={canvasRef}
          styles={styles}
          id="PongCanvas"
        ></PongCanvas>
      </PongPage>
    </NavLayout>
  )
}

export default Pong

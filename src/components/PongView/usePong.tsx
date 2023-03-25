import { useCallback, useEffect, useRef, useState } from 'react'
import { keyboardController } from '../../canvas-game/keyboardController'
import { translateCanvas } from '../../canvas-game/relativeCanvas'
import { EventConfig, eventController } from '../../eventController'
import PongGame from '../../pong/PongGame'

export const usePong = () => {
  const pongPageRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [pongGame, setPongGame] = useState<PongGame | null>(null)
  const [controlsWidth, setControlsWidth] = useState(0)

  const resizeCanvas = useCallback(() => {
    const width = pongPageRef.current?.clientWidth || 0
    const height = pongPageRef.current?.clientHeight || 0
    const size = translateCanvas({
      size: { width, height },
      sizeReduction: 0.8,
    })
    pongGame?.renderGame({ width: size, height: size })
    setControlsWidth(size)
  }, [pongGame])

  const onKeydown = (e: Event) => {
    const { isPressingLeft, isPressingRight } = keyboardController(
      e as KeyboardEvent
    )
    if (isPressingRight) pongGame?.pressRight()
    if (isPressingLeft) pongGame?.pressLeft()
  }

  const onKeyup = (e: Event) => {
    const { isPressingLeft, isPressingRight } = keyboardController(
      e as KeyboardEvent
    )
    if (isPressingRight) pongGame?.releaseRight()
    if (isPressingLeft) pongGame?.releaseLeft()
  }

  const events: EventConfig[] = [
    { name: 'resize', action: resizeCanvas },
    { name: 'keydown', action: onKeydown },
    { name: 'keyup', action: onKeyup },
  ]

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setPongGame(new PongGame(canvasRef.current!))
  }, [canvasRef])

  useEffect(() => {
    const { addEventListeners, removeEventListeners } = eventController({
      events,
    })

    resizeCanvas()
    addEventListeners()
    pongGame?.start()

    return () => {
      removeEventListeners()
    }
  }, [resizeCanvas])

  return { pongPageRef, canvasRef, controlsWidth, pongGame }
}

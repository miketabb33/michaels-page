import { useEffect, useRef } from 'react'
import { EventConfig, eventController } from '../eventController'
import { Size } from '../types/Size'

export type CanvasBinding = {
  getCanvas: () => HTMLCanvasElement | null
  getCanvasSize: () => Size
}

export const useCanvas = (sizeMultiplier: number) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const getSquareCanvasSize = (parentSize: Size, multiplier: number): Size => {
    const { width: parentWidth, height: parentHeight } = parentSize
    const size = parentWidth >= parentHeight ? parentHeight * multiplier : parentWidth * multiplier
    return { width: size, height: size }
  }

  const getCanvasSize = (): Size => {
    const canvas = canvasRef.current
    if (!canvas) return { width: 0, height: 0 }
    return { width: canvas.clientWidth, height: canvas.clientWidth }
  }

  const attemptToResizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parentElement = canvas.parentElement
    if (!parentElement) return

    const squareSize = getSquareCanvasSize(
      { width: parentElement.clientWidth, height: parentElement.clientHeight },
      sizeMultiplier
    )

    canvas.width = squareSize.width
    canvas.height = squareSize.height
  }

  const events: EventConfig[] = [{ name: 'resize', action: attemptToResizeCanvas }]

  useEffect(() => {
    const { addEventListeners, removeEventListeners } = eventController({
      events,
    })

    attemptToResizeCanvas()
    addEventListeners()
    return () => {
      removeEventListeners()
    }
  }, [])

  return {
    binding: {
      getCanvasSize,
      getCanvas: () => canvasRef.current,
    } as CanvasBinding,
    canvasRef,
  }
}

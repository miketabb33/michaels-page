import { useEffect, useRef, useState } from 'react'
import { EventConfig, eventController } from '../eventController'
import { Size } from '../types/Size'
import { Rect } from './rect'
import { isOffCanvas } from './isOffCanvas'
import { Direction } from '../types/Direction'
import { RenderableObject, render2dContext } from './render2dContext'
import { CanvasObject } from './canvasObjectController'
import { calcSquareCanvasSize, translateRect } from './relativeCanvas'

type UseCanvas = {
  sizeMultiplier: number
  units: number
}

export const useCanvas = ({ units, sizeMultiplier }: UseCanvas) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [canvasWidth, setCanvasWidthReactWidth] = useState(0)

  const isRectOffCanvas = (rect: Rect): Direction => {
    const translatedRect = translateRect(rect, getCanvasSizePixels(), units)
    return isOffCanvas(translatedRect, getCanvasSizePixels())
  }

  const getCanvasSizePixels = (): Size => {
    const canvas = canvasRef.current
    if (!canvas) return { width: 0, height: 0 }
    return { width: canvas.clientWidth, height: canvas.clientWidth }
  }

  const draw = (canvasObjects: CanvasObject[]) => {
    const renderableObjects: RenderableObject[] = canvasObjects.map((canvasObject) => {
      const translatedRect = translateRect(canvasObject.rect, getCanvasSizePixels(), units)
      return {
        rect: translatedRect,
        color: canvasObject.color,
        shape: canvasObject.shape,
      }
    })
    render2dContext(renderableObjects, canvasRef.current)
  }

  const attemptToResizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parentElement = canvas.parentElement
    if (!parentElement) return

    const squareSize = calcSquareCanvasSize(
      { width: parentElement.clientWidth, height: parentElement.clientHeight },
      sizeMultiplier
    )

    canvas.width = squareSize.width
    canvas.height = squareSize.height
    setCanvasWidthReactWidth(squareSize.width)
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
    isRectOffCanvas,
    draw,
    canvasRef,
    canvasWidth,
  }
}

import { useEffect, useRef, useState } from 'react'
import { EventConfig, eventController } from '../eventController'
import { Size } from '../types/Size'
import { Rect } from './rectController'
import { offCanvasDetector } from './offCanvasDetector'
import { Direction } from '../types/Direction'
import { RenderableObject, renderer2dContext } from './renderer2dContext'
import { CanvasObject } from './canvasObjectController'

export const useCanvas = (sizeMultiplier: number, units: number) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const { isOffCanvas } = offCanvasDetector()
  const { render } = renderer2dContext()

  const [widthReact, setWidthReact] = useState(0)

  const isRectOffCanvas = (rect: Rect): Direction => {
    const translatedRect = translateRect(rect)
    return isOffCanvas(translatedRect, getCanvasSizePixels())
  }

  const translateRect = (rect: Rect) => {
    const translateParam = (rectParam: number, canvasParam: number) => {
      return (rectParam / units) * canvasParam
    }

    const canvasSize = getCanvasSizePixels()

    const tWidth = translateParam(rect.size.width, canvasSize.width)
    const tHeight = translateParam(rect.size.height, canvasSize.height)
    const tx = translateParam(rect.position.x, canvasSize.width)
    const ty = translateParam(rect.position.y, canvasSize.height)

    const translatedRect: Rect = {
      position: { x: tx, y: ty },
      size: { width: tWidth, height: tHeight },
    }

    return translatedRect
  }

  const getSquareCanvasSize = (parentSize: Size, multiplier: number): Size => {
    const { width: parentWidth, height: parentHeight } = parentSize
    const size = parentWidth >= parentHeight ? parentHeight * multiplier : parentWidth * multiplier
    return { width: size, height: size }
  }

  const getCanvasSizePixels = (): Size => {
    const canvas = canvasRef.current
    if (!canvas) return { width: 0, height: 0 }
    return { width: canvas.clientWidth, height: canvas.clientWidth }
  }

  const draw = (canvasObjects: CanvasObject[]) => {
    const renderableObjects: RenderableObject[] = canvasObjects.map((canvasObject) => {
      const translatedRect = translateRect(canvasObject.rect)
      return {
        rect: translatedRect,
        color: canvasObject.color,
      }
    })
    render(renderableObjects, canvasRef.current)
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
    setWidthReact(squareSize.width)
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
    widthReact,
  }
}

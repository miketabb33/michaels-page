import { useEffect, useRef, useState } from 'react'
import { Size } from './types/Size'
import { Rect } from './rect'
import { isOffCanvas } from './isOffCanvas'
import { Direction } from './types/Direction'
import { RenderableObject, render2dContext } from './render2dContext'
import { CanvasObject } from './canvasObjectController'
import { calcSquareCanvasSize, translateRect } from './relativeCanvas'

type UseCanvas = {
  sizeMultiplier: number
  units: number
}

export const useCanvasController = ({ units, sizeMultiplier }: UseCanvas) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [canvasWidth, setCanvasWidthReactWidth] = useState(0)

  const getCanvasSizePixels = (): Size => {
    const canvas = canvasRef.current
    if (!canvas) return { width: 0, height: 0 }
    return { width: canvas.clientWidth, height: canvas.clientWidth }
  }

  const isRectOffCanvas = (rect: Rect): Direction => {
    const translatedRect = translateRect(rect, getCanvasSizePixels(), units)
    return isOffCanvas(translatedRect, getCanvasSizePixels())
  }

  const translateCanvasObjToRenderableObj = (canvasObjects: CanvasObject[]): RenderableObject[] => {
    const renderableObjects: RenderableObject[] = canvasObjects.map((canvasObject) => {
      return {
        rect: canvasObject.rect,
        color: canvasObject.color,
        shape: canvasObject.shape,
      }
    })
    return renderableObjects
  }

  const draw = (renderableObjects: RenderableObject[]) => {
    const translatedRectObjects: RenderableObject[] = renderableObjects.map((renderableObj) => {
      const translatedRect = translateRect(renderableObj.rect, getCanvasSizePixels(), units)
      return {
        rect: translatedRect,
        color: renderableObj.color,
        shape: renderableObj.shape,
      }
    })
    render2dContext(translatedRectObjects, canvasRef.current)
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

  return {
    isRectOffCanvas,
    draw,
    canvasRef,
    canvasWidth,
    translateCanvasObjToRenderableObj,
    attemptToResizeCanvas,
  }
}

export const useCanvas = (props: UseCanvas) => {
  const { isRectOffCanvas, draw, canvasRef, canvasWidth, translateCanvasObjToRenderableObj, attemptToResizeCanvas } =
    useCanvasController(props)

  useEffect(() => {
    attemptToResizeCanvas()
    addEventListener('resize', attemptToResizeCanvas)
    return () => {
      removeEventListener('resize', attemptToResizeCanvas)
    }
  }, [])

  return {
    isRectOffCanvas,
    draw,
    canvasRef,
    canvasWidth,
    translateCanvasObjToRenderableObj,
  }
}

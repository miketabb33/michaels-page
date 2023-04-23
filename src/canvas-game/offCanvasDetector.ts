import { Rect, getRectEdges } from './rectController'
import { Direction } from '../types/Direction'
import { Size } from '../types/Size'

export const offCanvasDetector = () => {
  const isOffCanvasUp = (rect: Rect): boolean => {
    if (rect.position.y < 0) return true
    return false
  }

  const isOffCanvasLeft = (rect: Rect): boolean => {
    if (rect.position.x < 0) return true
    return false
  }

  const isOffCanvasRight = (rect: Rect, canvasWidth: number): boolean => {
    const { right } = getRectEdges(rect)
    if (right > canvasWidth) return true
    return false
  }

  const isOffCanvasDown = (rect: Rect, canvasHeight: number): boolean => {
    const { bottom } = getRectEdges(rect)
    if (bottom > canvasHeight) return true
    return false
  }

  const isOffCanvas = (rect: Rect, canvasSize: Size): Direction => {
    if (isOffCanvasLeft(rect)) return 'left'
    if (isOffCanvasRight(rect, canvasSize.width)) return 'right'
    if (isOffCanvasDown(rect, canvasSize.height)) return 'down'
    if (isOffCanvasUp(rect)) return 'up'
    return 'none'
  }

  return {
    isOffCanvas,
  }
}

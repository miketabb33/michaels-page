import { getRectEdges, translateRect } from '../canvas-game/translateRect'
import { Direction } from '../types/Direction'
import { Rect } from '../types/Rect'
import { CanvasObjectType } from './canvasObject'
import { CanvasBinding } from './useCanvas'

export const canvasCollisionDetector = (canvasBinding: CanvasBinding, canvasDimensionUnits: number) => {
  const isOffCanvasUp = (rect: Rect): boolean => {
    if (rect.position.y < 0) return true
    return false
  }

  const isOffCanvasLeft = (rect: Rect): boolean => {
    if (rect.position.x < 0) return true
    return false
  }

  const isOffCanvasRight = (rect: Rect): boolean => {
    const translatedRect = translateRect(rect, canvasBinding.getCanvasSizePixels(), canvasDimensionUnits)
    const { right } = getRectEdges(translatedRect)
    if (right > canvasBinding.getCanvasSizePixels().width) return true
    return false
  }

  const isOffCanvasDown = (rect: Rect): boolean => {
    const translatedRect = translateRect(rect, canvasBinding.getCanvasSizePixels(), canvasDimensionUnits)
    const { bottom } = getRectEdges(translatedRect)
    if (bottom > canvasBinding.getCanvasSizePixels().height) return true
    return false
  }

  const isOffCanvas = (object: CanvasObjectType): Direction => {
    if (isOffCanvasLeft(object.rect)) return 'left'
    if (isOffCanvasRight(object.rect)) return 'right'
    if (isOffCanvasDown(object.rect)) return 'down'
    if (isOffCanvasUp(object.rect)) return 'up'
    return 'none'
  }

  return {
    isOffCanvas,
  }
}

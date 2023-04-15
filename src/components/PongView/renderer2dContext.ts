import { CanvasObjectType } from '../../pong/CanvasObject'
import { CanvasBinding } from '../../pong/useCanvas'
import { translateRect } from './translateRect'

export const renderer2dContext = (canvasBinding: CanvasBinding, gameUnits: number) => {
  const getCtx = () => {
    const canvas = canvasBinding.getCanvas()
    if (!canvas) return
    return canvas.getContext('2d')
  }

  const renderCanvasObject = (canvasObject: CanvasObjectType) => {
    const ctx = getCtx()
    if (!ctx) return
    const translatedRect = translateRect(canvasObject.rect, canvasBinding.getCanvasSize(), gameUnits)
    const { width, height } = translatedRect.size
    const { x, y } = translatedRect.position

    ctx.fillStyle = canvasObject.color
    ctx.fillRect(x, y, width, height)
  }

  const clearCanvas = () => {
    const ctx = getCtx()
    if (!ctx) return
    const { width, height } = canvasBinding.getCanvasSize()
    ctx.clearRect(0, 0, width, height)
  }

  const render = (canvasObjects: CanvasObjectType[]) => {
    clearCanvas()
    canvasObjects.forEach((canvasObject) => {
      renderCanvasObject(canvasObject)
    })
  }

  return { render }
}
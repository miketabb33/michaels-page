import { Size } from './types/Size'
import { Rect } from './rect'

export const translateRect = (rect: Rect, canvasSize: Size, units: number) => {
  const translateParam = (rectParam: number, canvasParam: number) => {
    return (rectParam / units) * canvasParam
  }

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

export const calcSquareCanvasSize = (parentSize: Size, sizeReduction: number): Size => {
  const { width: parentWidth, height: parentHeight } = parentSize
  const size = parentWidth >= parentHeight ? parentHeight : parentWidth
  const reducedSize = size * sizeReduction
  return { width: reducedSize, height: reducedSize }
}

import { Rect } from '../types/Rect'
import { Size } from '../types/Size'

export const translateCanvas = ({ width, height }: Size) => {
  const ratio = 0.8
  return width >= height ? height * ratio : width * ratio
}

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

import { Rect } from '../types/Rect'
import { Size } from '../types/Size'

type TranslateCanvas = {
  size: Size
  sizeReduction?: number
}

export const translateCanvas = ({
  size,
  sizeReduction = 1,
}: TranslateCanvas) => {
  const { width, height } = size
  return width >= height ? height * sizeReduction : width * sizeReduction
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

import { Size } from './types/Size'

export const getCanvasSize = ({ width, height }: Size) => {
  return width >= height ? height * 0.9 : width * 0.9
}

import { DirectionValue } from '../types/DirectionValue'

type FlipDirection = {
  value: DirectionValue
  flipX?: boolean
  flipY?: boolean
}

export const flipDirection = ({ value, flipX = false, flipY = false }: FlipDirection) => {
  let newX = value.x
  let newY = value.y

  if (flipX) newX *= -1
  if (flipY) newY *= -1

  return { x: newX, y: newY }
}

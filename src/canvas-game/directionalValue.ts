import { DirectionValue } from './types/DirectionValue'

type FlipDirection = {
  value: DirectionValue
  flipX?: boolean
  flipY?: boolean
}

export const flipDirection = ({ value, flipX = false, flipY = false }: FlipDirection): DirectionValue => {
  let newX = value.x
  let newY = value.y

  if (flipX) newX *= -1
  if (flipY) newY *= -1

  return { x: newX, y: newY }
}

type CalcNewBounceDirection = {
  newX: number
  oldY: number
}

export const calcNewBounceDirection = ({ newX, oldY }: CalcNewBounceDirection): DirectionValue => {
  const newY = 1 - Math.abs(newX)
  const oldYDirection = oldY >= 0 ? -1 : 1
  return { x: newX, y: newY * oldYDirection }
}

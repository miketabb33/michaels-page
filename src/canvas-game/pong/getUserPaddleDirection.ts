import { Direction } from '../types/Direction'
import { DirectionValue } from '../types/DirectionValue'

type GetUserPaddleDirectionArgs = {
  direction: Direction
  isPlayerOffCanvas: Direction
}

export const getUserPaddleDirection = ({
  direction,
  isPlayerOffCanvas,
}: GetUserPaddleDirectionArgs): DirectionValue => {
  if (direction === 'left' && isPlayerOffCanvas !== 'left') {
    return { x: -1, y: 0 }
  } else if (direction === 'right' && isPlayerOffCanvas !== 'right') {
    return { x: 1, y: 0 }
  } else {
    return { x: 0, y: 0 }
  }
}

import { Direction } from '../../types/Direction'
import { CanvasObjectController } from '../canvasObjectController'

type PlayerPaddleMotion = {
  playerPaddle: CanvasObjectController
  direction: Direction
  isPlayerOffCanvas: Direction
}

export const playerPaddleMotion = ({ playerPaddle, direction, isPlayerOffCanvas }: PlayerPaddleMotion) => {
  if (direction === 'left' && isPlayerOffCanvas !== 'left') {
    playerPaddle.changeDirection({ x: -1, y: 0 })
  } else if (direction === 'right' && isPlayerOffCanvas !== 'right') {
    playerPaddle.changeDirection({ x: 1, y: 0 })
  } else {
    playerPaddle.changeDirection({ x: 0, y: 0 })
  }

  playerPaddle.move()
}

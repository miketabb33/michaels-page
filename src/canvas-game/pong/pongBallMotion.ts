import { Direction } from '../../types/Direction'
import { DirectionValue } from '../../types/DirectionValue'
import { CanvasObjectController } from '../canvasObjectController'

type BallMotionResult = {
  didHitTop: boolean
  didHitBottom: boolean
}

type PongBallMotion = {
  pongBall: CanvasObjectController
  isBallOffCanvas: Direction
}

export const pongBallMotion = ({ pongBall, isBallOffCanvas }: PongBallMotion): BallMotionResult => {
  if (isBallOffCanvas === 'left' || isBallOffCanvas == 'right') {
    pongBall.changeDirection(pongBallBounce(pongBall))
  }
  pongBall.move()
  if (isBallOffCanvas === 'down') return { didHitBottom: true, didHitTop: false }
  if (isBallOffCanvas === 'up') return { didHitBottom: false, didHitTop: true }
  return { didHitBottom: false, didHitTop: false }
}

const pongBallBounce = (pongBall: CanvasObjectController): DirectionValue => {
  const { x, y } = pongBall.getCanvasObject().velocity.directionValue
  const newX = x * -1
  return { x: newX, y }
}

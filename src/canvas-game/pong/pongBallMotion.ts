import { Direction } from '../types/Direction'
import { CanvasObjectController } from '../canvasObjectController'
import { flipDirection } from '../directionalValue'

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
    const newDirection = flipDirection({ value: pongBall.canvasObj().velocity.directionValue, flipX: true })
    pongBall.changeDirection(newDirection)
  }
  if (isBallOffCanvas === 'down') return { didHitBottom: true, didHitTop: false }
  if (isBallOffCanvas === 'up') return { didHitBottom: false, didHitTop: true }

  pongBall.move()
  return { didHitBottom: false, didHitTop: false }
}

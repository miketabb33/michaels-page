import { CanvasObjectController } from '../canvasObjectController'
import { random } from '../../random'
import { DirectionValue } from '../../types/DirectionValue'
import { calcCircularBounce } from './circularBounce'

type PongBounceType = 'random3' | 'round'

type PlayerBallBouncerProps = {
  paddle: CanvasObjectController
  pongBall: CanvasObjectController
  bounce: PongBounceType
}

export const pongPaddleBouncer = ({ paddle, pongBall, bounce }: PlayerBallBouncerProps) => {
  if (bounce === 'round') {
    const newDirection = calcCircularBounce(paddle, pongBall)
    pongBall.changeDirection(newDirection)
  } else if (bounce === 'random3') {
    pongBall.changeDirection(calcRandom5(pongBall.getCanvasObject().velocity.directionValue.y))
  }
}

export const calcRandom5 = (currentY: number): DirectionValue => {
  const flipY = currentY > 0 ? -1 : 1
  const randomNum = random(5)
  if (randomNum === 0) return { x: -0.5, y: 0.5 * flipY }
  if (randomNum === 1) return { x: 0.5, y: 0.5 * flipY }
  if (randomNum === 2) return { x: -0.25, y: 0.75 * flipY }
  if (randomNum === 3) return { x: 0.25, y: 0.75 * flipY }
  return { x: 0, y: 1 * flipY }
}

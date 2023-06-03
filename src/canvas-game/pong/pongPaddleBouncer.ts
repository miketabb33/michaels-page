import { CanvasObjectController } from '../canvasObjectController'
import { random } from '../../random'
import { calcCircularBounce } from './circularBounce'
import { calcNewBounceDirection } from '../directionalValue'

type PongBounceType = 'random5' | 'round'

type PlayerBallBouncerProps = {
  paddle: CanvasObjectController
  pongBall: CanvasObjectController
  bounce: PongBounceType
}

export const pongPaddleBouncer = ({ paddle, pongBall, bounce }: PlayerBallBouncerProps) => {
  if (bounce === 'round') {
    const newDirection = calcCircularBounce(paddle, pongBall)
    pongBall.changeDirection(newDirection)
  } else if (bounce === 'random5') {
    const newX = calcNewRandomX5()
    const newDirection = calcNewBounceDirection({ newX, oldY: pongBall.getCanvasObject().velocity.directionValue.y })
    pongBall.changeDirection(newDirection)
  }
}

export const calcNewRandomX5 = (): number => {
  const randomNum = random(5)
  if (randomNum === 0) return -0.5
  if (randomNum === 1) return 0.5
  if (randomNum === 2) return -0.25
  if (randomNum === 3) return 0.25
  return 0
}

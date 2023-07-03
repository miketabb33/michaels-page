import { CanvasObject } from '../canvasObjectController'
import { random } from '../../random'
import { calcNewXBasedOnCollision } from './calcNewXBasedOnCollision'
import { calcNewBounceDirection, flipDirection } from '../directionalValue'
import { DirectionValue } from '../types/DirectionValue'

type PongBounceType = 'random5' | 'relative' | 'natural'

type PlayerBallBouncerProps = {
  paddle: CanvasObject
  pongBall: CanvasObject
  bounce: PongBounceType
}

export const pongPaddleBouncer = ({ paddle, pongBall, bounce }: PlayerBallBouncerProps): DirectionValue => {
  if (bounce === 'natural') return flipDirection({ value: pongBall.velocity.directionValue, flipY: true })

  if (bounce === 'relative') {
    const newX = calcNewXBasedOnCollision({
      subject: paddle.rect,
      test: pongBall.rect,
    })
    const safeNewX = maxEdgeXFoBounce(newX, 0.4)
    const oldY = pongBall.velocity.directionValue.y
    return calcNewBounceDirection({ newX: safeNewX, oldY })
  }

  if (bounce === 'random5') {
    const newX = calcNewRandomX5()
    const oldY = pongBall.velocity.directionValue.y
    return calcNewBounceDirection({ newX, oldY })
  }

  throw new Error('Unhandled bounce type')
}

const calcNewRandomX5 = (): number => {
  const randomNum = random(5)
  if (randomNum === 0) return -0.5
  if (randomNum === 1) return 0.5
  if (randomNum === 2) return -0.25
  if (randomNum === 3) return 0.25
  return 0
}

export const maxEdgeXFoBounce = (x: number, maxThreshold: number) => {
  const lowerThresholdValue = -1 + maxThreshold
  if (x < lowerThresholdValue) return lowerThresholdValue
  const upperThresholdValue = 1 - maxThreshold
  if (x > upperThresholdValue) return upperThresholdValue
  return x
}

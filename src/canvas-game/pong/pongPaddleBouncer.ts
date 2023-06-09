import { CanvasObjectController } from '../canvasObjectController'
import { random } from '../../random'
import { calcNewXBasedOnCollision } from './calcNewXBasedOnCollision'
import { calcNewBounceDirection, flipDirection } from '../directionalValue'

type PongBounceType = 'random5' | 'relative' | 'natural'

type PlayerBallBouncerProps = {
  paddle: CanvasObjectController
  pongBall: CanvasObjectController
  bounce: PongBounceType
}

export const pongPaddleBouncer = (props: PlayerBallBouncerProps) => {
  if (props.bounce === 'natural') {
    const newDirection = flipDirection({ value: props.pongBall.canvasObj().velocity.directionValue, flipY: true })
    props.pongBall.changeDirection(newDirection)
    return
  }

  const newX = getNewX(props)
  const oldY = props.pongBall.canvasObj().velocity.directionValue.y
  const newDirection = calcNewBounceDirection({ newX, oldY })
  props.pongBall.changeDirection(newDirection)
}

const getNewX = ({ paddle, pongBall, bounce }: PlayerBallBouncerProps) => {
  if (bounce === 'relative') {
    const newX = calcNewXBasedOnCollision({
      subject: paddle.canvasObj().rect,
      test: pongBall.canvasObj().rect,
    })
    return maxEdgeXFoBounce(newX, 0.4)
  }
  return calcNewRandomX5()
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

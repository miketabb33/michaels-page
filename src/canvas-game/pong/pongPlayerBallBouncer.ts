import { CanvasObjectController } from '../../canvas-game/canvasObjectController'
import { random } from '../../random'
import { DirectionValue } from '../../types/DirectionValue'
import { calcCircularBounce } from '../../canvas-game/pong/circularBounce'

type PongBounceType = 'random3' | 'round'

type PlayerBallBouncerProps = {
  playerPaddle: CanvasObjectController
  pongBall: CanvasObjectController
  bounce: PongBounceType
}

export const pongPlayerBallBouncer = ({ playerPaddle, pongBall, bounce }: PlayerBallBouncerProps) => {
  if (bounce === 'round') {
    const newDirection = calcCircularBounce(playerPaddle, pongBall)
    pongBall.changeDirection(newDirection)
  } else if (bounce === 'random3') {
    pongBall.changeDirection(playerHitPaddleDirection())
  }
}

const playerHitPaddleDirection = (): DirectionValue => {
  const randomNum = random(3)
  if (randomNum === 0) return { x: -0.5, y: -0.5 }
  if (randomNum === 1) return { x: 0.5, y: -0.5 }
  return { x: 0, y: -1 }
}

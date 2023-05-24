import { random } from '../../random'
import { CanvasObjectController } from '../canvasObjectController'
import { collisionDetection } from '../rect'
import { pongPlayerBallBouncer } from './pongPlayerBallBouncer'

export const didPongHitPlayPaddle = (
  pongBall: CanvasObjectController,
  playerPaddle: CanvasObjectController
): boolean => {
  const didHitPlayerPaddle = collisionDetection(pongBall.getCanvasObject().rect, playerPaddle.getCanvasObject().rect)
  if (didHitPlayerPaddle) {
    pongPlayerBallBouncer({ playerPaddle, pongBall, bounce: 'round' })
    return true
  }
  return false
}

export const didPongHitOpponent = (pongBall: CanvasObjectController, opponentPaddle: CanvasObjectController) => {
  const didHitOpponentPaddle = collisionDetection(
    pongBall.getCanvasObject().rect,
    opponentPaddle.getCanvasObject().rect
  )
  if (didHitOpponentPaddle) pongBall.changeDirection(opponentHitPaddleDirection())
}

const opponentHitPaddleDirection = () => {
  const randomNum = random(3)
  if (randomNum === 1) return { x: -0.5, y: 0.5 }
  if (randomNum === 2) return { x: 0.5, y: 0.5 }
  return { x: 0, y: 1 }
}

import { CanvasObjectController } from '../canvasObjectController'
import { collisionDetection } from '../rect'
import { pongPaddleBouncer } from './pongPaddleBouncer'

export const didPongHitPlayPaddle = (
  pongBall: CanvasObjectController,
  playerPaddle: CanvasObjectController
): boolean => {
  const didHitPlayerPaddle = collisionDetection(pongBall.getCanvasObject().rect, playerPaddle.getCanvasObject().rect)
  if (didHitPlayerPaddle) {
    pongPaddleBouncer({ paddle: playerPaddle, pongBall, bounce: 'round' })
    return true
  }
  return false
}

export const didPongHitOpponent = (pongBall: CanvasObjectController, opponentPaddle: CanvasObjectController) => {
  const didHitOpponentPaddle = collisionDetection(
    pongBall.getCanvasObject().rect,
    opponentPaddle.getCanvasObject().rect
  )
  if (didHitOpponentPaddle) pongPaddleBouncer({ paddle: opponentPaddle, pongBall, bounce: 'random3' })
}

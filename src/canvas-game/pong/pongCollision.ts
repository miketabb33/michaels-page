import { CanvasObjectController } from '../canvasObjectController'
import { collisionDetection } from '../rect'
import { pongPaddleBouncer } from './pongPaddleBouncer'

export const didPongHitPlayPaddle = (
  pongBall: CanvasObjectController,
  playerPaddle: CanvasObjectController
): boolean => {
  const didHitPlayerPaddle = collisionDetection(pongBall.canvasObj().rect, playerPaddle.canvasObj().rect)
  if (didHitPlayerPaddle) {
    pongPaddleBouncer({ paddle: playerPaddle, pongBall, bounce: 'relative' })
    return true
  }
  return false
}

export const didPongHitOpponent = (
  pongBall: CanvasObjectController,
  opponentPaddle: CanvasObjectController
): boolean => {
  const didHitOpponentPaddle = collisionDetection(pongBall.canvasObj().rect, opponentPaddle.canvasObj().rect)
  if (didHitOpponentPaddle) {
    pongPaddleBouncer({ paddle: opponentPaddle, pongBall, bounce: 'natural' })
    return true
  }
  return false
}

import { CanvasObject, CanvasObjectController } from '../../canvasObjectController'

export type PongConfig = {
  pongBall: CanvasObject
  playerPaddle: CanvasObject
  opponentPaddle: CanvasObject
  canvasDimensionUnits: number
  didFireFrame: (
    playerPaddle: CanvasObjectController,
    pongBall: CanvasObjectController,
    opponentPaddle: CanvasObjectController,
    score: number
  ) => void
}

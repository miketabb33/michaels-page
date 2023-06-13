import { CanvasObject, CanvasObjectController } from '../../canvasObjectController'
import { ScoreResult } from '../../pongScore'

export type PongConfig = {
  pongBall: CanvasObject
  playerPaddle: CanvasObject
  opponentPaddle: CanvasObject
  canvasDimensionUnits: number
  didFireFrame: (
    playerPaddle: CanvasObjectController,
    pongBall: CanvasObjectController,
    opponentPaddle: CanvasObjectController,
    score: ScoreResult
  ) => void
}

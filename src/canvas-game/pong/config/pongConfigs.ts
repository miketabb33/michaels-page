import { CanvasObject, CanvasObjectController } from '../../canvasObjectController'

export type PongConfig = {
  pongBall: CanvasObject
  playerPaddle: CanvasObject
  opponentPaddle: CanvasObject
  canvasDimensionUnits: number
  didFireFrame: (args: DidFireFrameArgs) => void
}

export type DidFireFrameArgs = {
  playerPaddle: CanvasObjectController
  pongBall: CanvasObjectController
  opponentPaddle: CanvasObjectController
  score: number
}

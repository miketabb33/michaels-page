/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanvasObjectController } from '../../../src/canvas-game/canvasObjectController'
import { PongConfig } from '../../../src/canvas-game/pong/config/pongConfigs'

export const PONG_CONFIG_MOCK: PongConfig = {
  pongBall: {
    rect: {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
    color: '',
    velocity: {
      directionValue: {
        x: 0,
        y: 0,
      },
      speed: 0,
    },
    shape: 'rectangle',
  },
  playerPaddle: {
    rect: {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
    color: '',
    velocity: {
      directionValue: {
        x: 0,
        y: 0,
      },
      speed: 0,
    },
    shape: 'rectangle',
  },
  opponentPaddle: {
    rect: {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
    color: '',
    velocity: {
      directionValue: {
        x: 0,
        y: 0,
      },
      speed: 0,
    },
    shape: 'rectangle',
  },
  canvasDimensionUnits: 0,
  didFireFrame: function (
    playerPaddle: CanvasObjectController,
    pongBall: CanvasObjectController,
    opponentPaddle: CanvasObjectController,
    score: number
  ): void {
    throw new Error('Function not implemented.')
  },
}

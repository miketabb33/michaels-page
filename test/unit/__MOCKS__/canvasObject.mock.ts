import { CanvasObject } from '../../../src/canvas-game/canvasObjectController'

export const makeCanvasObjectMock = (): CanvasObject => {
  return {
    rect: {
      size: { width: 0, height: 0 },
      position: {
        x: 0,
        y: 0,
      },
    },
    color: '',
    velocity: {
      speed: 0,
      directionValue: {
        x: 0,
        y: 0,
      },
    },
    shape: 'circle',
  }
}

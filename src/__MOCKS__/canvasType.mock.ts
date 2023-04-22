import { CanvasObject } from '../canvas-game/canvasObjectController'

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
    speed: 0,
    direction: 'none',
  }
}

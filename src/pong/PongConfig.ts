import { CanvasObject } from '../types/CanvasObject'
import { DirectionalCanvasObject } from '../types/DirectionalCanvasObject'
import { Size } from '../types/Size'

export type PongConfig = {
  pongBall: DirectionalCanvasObject
  playerPaddle: CanvasObject
  opponentPaddle: DirectionalCanvasObject
  canvasUnits: number
}

const tuftsBlue = '#3C97D7'
const carrotOrange = '#D98F25'

export const getPongConfig = (): PongConfig => {
  const canvasUnits = 1000
  return {
    pongBall: makePongBall(canvasUnits),
    playerPaddle: makePlayerPaddle(canvasUnits),
    opponentPaddle: makeOpponentPaddle(canvasUnits),
    canvasUnits: canvasUnits,
  }
}

const paddleSize: Size = { width: 150, height: 30 }

const makePlayerPaddle = (canvasUnits: number): CanvasObject => {
  return {
    rect: {
      size: paddleSize,
      position: {
        x: canvasUnits / 2 - paddleSize.width / 2,
        y: canvasUnits - paddleSize.height,
      },
    },
    color: tuftsBlue,
    speed: 10,
  }
}

const makeOpponentPaddle = (canvasUnits: number): DirectionalCanvasObject => {
  return {
    canvasObject: {
      rect: {
        size: { ...paddleSize, width: canvasUnits },
        position: {
          x: 0, //canvasUnits / 2 - paddleSize.width / 2,
          y: 0,
        },
      },
      color: tuftsBlue,
      speed: 10,
    },
    direction: 'none',
  }
}

const makePongBall = (canvasUnits: number): DirectionalCanvasObject => {
  const ballSize: Size = { width: 20, height: 20 }
  return {
    canvasObject: {
      rect: {
        size: ballSize,
        position: {
          x: canvasUnits / 2 - ballSize.width / 2,
          y: canvasUnits / 2 - ballSize.height / 2 - 100,
        },
      },
      color: carrotOrange,
      speed: 15,
    },
    direction: 'down left',
  }
}

import { CanvasObject } from '../../canvas-game/canvasObjectController'
import { random } from '../../random'
import { Direction } from '../../types/Direction'
import { Size } from '../../types/Size'

export type PongConfig = {
  pongBall: CanvasObject
  playerPaddle: CanvasObject
  opponentPaddle: CanvasObject
  canvasDimensionUnits: number
}

const tuftsBlue = '#3C97D7'
const carrotOrange = '#D98F25'

export const getPongConfig = (): PongConfig => {
  const canvasDimensionUnits = 1000
  return {
    pongBall: makePongBall(canvasDimensionUnits),
    playerPaddle: makePlayerPaddle(canvasDimensionUnits),
    opponentPaddle: makeOpponentPaddle(canvasDimensionUnits),
    canvasDimensionUnits,
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
    direction: 'none',
  }
}

const makeOpponentPaddle = (canvasUnits: number): CanvasObject => {
  return {
    rect: {
      size: { ...paddleSize, width: canvasUnits },
      position: {
        x: 0, //canvasUnits / 2 - paddleSize.width / 2,
        y: 0,
      },
    },
    color: tuftsBlue,
    speed: 10,
    direction: 'none',
  }
}

const makePongBall = (canvasUnits: number): CanvasObject => {
  const ballSize: Size = { width: 20, height: 20 }

  return {
    rect: {
      size: ballSize,
      position: {
        x: canvasUnits / 2 - ballSize.width / 2,
        y: canvasUnits / 2 - ballSize.height / 2 - 200,
      },
    },
    color: carrotOrange,
    speed: 13,
    direction: randomPaddleDirection(),
  }
}

const randomPaddleDirection = (): Direction => {
  const randomNum = random(6)

  if (randomNum === 0) return 'up'
  if (randomNum === 1) return 'up left'
  if (randomNum === 2) return 'up right'
  if (randomNum === 3) return 'down'
  if (randomNum === 4) return 'down left'
  if (randomNum === 5) return 'down right'
  return 'none'
}

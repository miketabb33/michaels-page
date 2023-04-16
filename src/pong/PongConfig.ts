import { random } from '../random'
import { Direction } from '../types/Direction'
import { Size } from '../types/Size'
import { CanvasObjectType } from './CanvasObject'

export type PongConfig = {
  pongBall: CanvasObjectType
  playerPaddle: CanvasObjectType
  opponentPaddle: CanvasObjectType
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

const makePlayerPaddle = (canvasUnits: number): CanvasObjectType => {
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

const makeOpponentPaddle = (canvasUnits: number): CanvasObjectType => {
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

const makePongBall = (canvasUnits: number): CanvasObjectType => {
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

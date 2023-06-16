import { random } from '../../../random'
import { Size } from '../../types/Size'
import { CanvasObject, CanvasObjectController } from '../../canvasObjectController'
import { ScoreResult } from '../../pongScore'
import { PongConfig } from './pongConfigs'
import { DirectionValue } from '../../types/DirectionValue'

const tuftsBlue = '#3C97D7'
const carrotOrange = '#D98F25'

export const getPongSoloConfig = (): PongConfig => {
  const canvasDimensionUnits = 1000
  return {
    pongBall: makePongBall(canvasDimensionUnits),
    playerPaddle: makePlayerPaddle(canvasDimensionUnits),
    opponentPaddle: makeOpponentPaddle(canvasDimensionUnits),
    canvasDimensionUnits,
    didFireFrame,
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
    velocity: {
      speed: 10,
      directionValue: {
        x: 0,
        y: 0,
      },
    },
    shape: 'rectangle',
  }
}

const makeOpponentPaddle = (canvasUnits: number): CanvasObject => {
  return {
    rect: {
      size: { ...paddleSize, width: canvasUnits },
      position: {
        x: 0,
        y: 0,
      },
    },
    color: tuftsBlue,
    velocity: {
      speed: 10,
      directionValue: {
        x: 0,
        y: 0,
      },
    },
    shape: 'rectangle',
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
    velocity: {
      speed: levels[0].speed,
      directionValue: randomPaddleDirection(),
    },
    shape: 'circle',
  }
}

const randomPaddleDirection = (): DirectionValue => {
  const randomNum = random(6)

  if (randomNum === 0) return { x: 0.05, y: -0.95 }
  if (randomNum === 1) return { x: -0.5, y: -0.5 }
  if (randomNum === 2) return { x: 0.5, y: -0.5 }
  if (randomNum === 3) return { x: 0.05, y: 0.95 }
  if (randomNum === 4) return { x: -0.5, y: 0.5 }
  if (randomNum === 5) return { x: 0.5, y: 0.5 }
  return { x: 0, y: 0 }
}

const didFireFrame = (
  playerPaddle: CanvasObjectController,
  pongBall: CanvasObjectController,
  opponentPaddle: CanvasObjectController,
  scoreResult: ScoreResult
) => {
  const calculatedLevel = Math.floor(scoreResult.score / 4)
  const currentLevel = levels.find((pred) => pred.level === calculatedLevel) || levels[levels.length - 1]
  const currentBallSpeed = pongBall.canvasObj().velocity.speed

  if (currentBallSpeed !== currentLevel.speed) {
    pongBall.changeSpeed(currentLevel.speed)
    playerPaddle.changeSpeed(playerPaddle.canvasObj().velocity.speed - 0.5)
  }
}

type pongLevel = {
  speed: number
  level: number
}

const levels: pongLevel[] = [
  {
    level: 0,
    speed: 13,
  },
  {
    level: 1,
    speed: 14,
  },
  {
    level: 2,
    speed: 15,
  },
  {
    level: 3,
    speed: 16,
  },
  {
    level: 4,
    speed: 17,
  },
  {
    level: 5,
    speed: 18,
  },
  {
    level: 6,
    speed: 19,
  },
  {
    level: 7,
    speed: 20,
  },
]

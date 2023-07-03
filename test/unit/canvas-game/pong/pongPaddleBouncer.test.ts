import { calcNewBounceDirection, flipDirection } from '../../../../src/canvas-game/directionalValue'
import { calcNewXBasedOnCollision } from '../../../../src/canvas-game/pong/calcNewXBasedOnCollision'
import { maxEdgeXFoBounce, pongPaddleBouncer } from '../../../../src/canvas-game/pong/pongPaddleBouncer'
import { random } from '../../../../src/random'
import { makeCanvasObjectMock } from '../../__MOCKS__/canvasObject.mock'

jest.mock('../../../../src/canvas-game/directionalValue')
jest.mock('../../../../src/canvas-game/pong/calcNewXBasedOnCollision')
jest.mock('../../../../src/random')

const FLIP_DIRECTION = flipDirection as jest.Mock
const CALC_NEW_X_BASED_ON_COLLISION = calcNewXBasedOnCollision as jest.Mock
const CALC_NEW_BOUNCE_DIRECTION = calcNewBounceDirection as jest.Mock
const RANDOM = random as jest.Mock

beforeEach(jest.clearAllMocks)

describe('Pong Paddle Bounder', () => {
  it('should handle natural', () => {
    FLIP_DIRECTION.mockImplementationOnce(() => ({ x: 0.75, y: 0.25 }))
    const PADDLE = makeCanvasObjectMock()
    const PONG_BALL = makeCanvasObjectMock()

    const result = pongPaddleBouncer({ paddle: PADDLE, pongBall: PONG_BALL, bounce: 'natural' })
    expect(result).toEqual({ x: 0.75, y: 0.25 })
  })
  it('should handle relative', () => {
    CALC_NEW_X_BASED_ON_COLLISION.mockImplementationOnce(() => 50)
    CALC_NEW_BOUNCE_DIRECTION.mockImplementationOnce(() => ({ x: 0.2, y: -0.8 }))
    const PADDLE = { ...makeCanvasObjectMock(), rect: { position: { x: 5, y: 10 }, size: { width: 100, height: 50 } } }
    const PONG_BALL = makeCanvasObjectMock()

    const result = pongPaddleBouncer({ paddle: PADDLE, pongBall: PONG_BALL, bounce: 'relative' })
    expect(CALC_NEW_X_BASED_ON_COLLISION).toHaveBeenCalledWith({ subject: PADDLE.rect, test: PONG_BALL.rect })
    expect(CALC_NEW_BOUNCE_DIRECTION).toHaveBeenCalledWith({ newX: 0.6, oldY: 0 })
    expect(result).toEqual({ x: 0.2, y: -0.8 })
  })
  it('should handle random', () => {
    RANDOM.mockImplementationOnce(() => 1)
    CALC_NEW_BOUNCE_DIRECTION.mockImplementationOnce(() => ({ x: 0.2, y: -0.8 }))

    const PADDLE = makeCanvasObjectMock()
    const PONG_BALL = makeCanvasObjectMock()

    const result = pongPaddleBouncer({ paddle: PADDLE, pongBall: PONG_BALL, bounce: 'random5' })
    expect(result).toEqual({ x: 0.2, y: -0.8 })
    expect(CALC_NEW_BOUNCE_DIRECTION).toHaveBeenCalledWith({ newX: 0.5, oldY: 0 })
  })
})

describe('Max Edge X For Bounce', () => {
  it('should return positive x value when max threshold is not reached', () => {
    const X = 0.6
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(X)
  })

  it('should return negative x value when max threshold is not reached', () => {
    const X = -0.6
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(X)
  })

  it('should return threshold value when X is BELOW max threshold', () => {
    const X = -0.9
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(-0.85)
  })

  it('should return threshold value when X is ABOVE max threshold', () => {
    const X = 0.9
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(0.85)
  })
})

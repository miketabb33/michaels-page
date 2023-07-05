import { CanvasObjectController } from '../../../../src/canvas-game/canvasObjectController'
import { getPongSoloConfig } from '../../../../src/canvas-game/pong/config/soloConfig'
import { random } from '../../../../src/random'
import { makeCanvasObjectMock } from '../../__MOCKS__/canvasObject.mock'

jest.mock('../../../../src/random')

const RANDOM = random as jest.Mock

RANDOM.mockImplementation(() => 1)

const CHANGE_SPEED_PLAYER = jest.fn()
const CHANGE_SPEED_BALL = jest.fn()

const PLAYER_PADDLE = {
  canvasObj: () => ({ ...makeCanvasObjectMock(), velocity: { speed: 10 } }),
  changeSpeed: CHANGE_SPEED_PLAYER,
} as unknown as CanvasObjectController

beforeEach(jest.clearAllMocks)

describe('Solo Config', () => {
  it('should match snapshot', () => {
    expect(getPongSoloConfig()).toMatchSnapshot()
  })

  it('should not change speed when current ball speed and current level speed are the same', () => {
    const SCORE = 3
    const PONG_BALL = {
      canvasObj: () => ({ ...makeCanvasObjectMock(), velocity: { speed: 13 } }),
      changeSpeed: CHANGE_SPEED_BALL,
    } as unknown as CanvasObjectController

    const { didFireFrame } = getPongSoloConfig()
    didFireFrame({
      playerPaddle: PLAYER_PADDLE,
      pongBall: PONG_BALL,
      opponentPaddle: {} as CanvasObjectController,
      score: SCORE,
    })

    expect(CHANGE_SPEED_BALL).not.toHaveBeenCalled()
    expect(CHANGE_SPEED_PLAYER).not.toHaveBeenCalled()
  })
  it('should change speed when current ball speed and current level speed are NOT the same', () => {
    const SCORE = 5
    const PONG_BALL = {
      canvasObj: () => ({ ...makeCanvasObjectMock(), velocity: { speed: 13 } }),
      changeSpeed: CHANGE_SPEED_BALL,
    } as unknown as CanvasObjectController

    const { didFireFrame } = getPongSoloConfig()
    didFireFrame({
      playerPaddle: PLAYER_PADDLE,
      pongBall: PONG_BALL,
      opponentPaddle: {} as CanvasObjectController,
      score: SCORE,
    })

    expect(CHANGE_SPEED_BALL).toHaveBeenCalledWith(15)
    expect(CHANGE_SPEED_PLAYER).toHaveBeenCalledWith(9.5)
  })
})

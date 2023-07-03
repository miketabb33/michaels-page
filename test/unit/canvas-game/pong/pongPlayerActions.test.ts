import { PongController } from '../../../../src/canvas-game/GameClickController'
import { gameKeyboard } from '../../../../src/canvas-game/gameKeyboard'
import { pongPlayerActions } from '../../../../src/canvas-game/pong/pongPlayerActions'

jest.mock('../../../../src/canvas-game/gameKeyboard')

const GAME_KEYBOARD = gameKeyboard as jest.Mock
const PC_IS_PRESSING_LEFT_SPY = jest.spyOn(PongController, 'isPressingLeft')
const PC_IS_PRESSING_RIGHT_SPY = jest.spyOn(PongController, 'isPressingRight')

GAME_KEYBOARD.mockImplementation(() => ({
  isPressingLeftKey: () => false,
  isPressingRightKey: () => false,
}))

beforeEach(jest.clearAllMocks)

describe('Pong Player Actions', () => {
  it('should return NONE when nothing is being pressed', () => {
    const { detectPlayerControls } = pongPlayerActions()
    const result = detectPlayerControls()
    expect(result).toEqual('none')
  })
  it('should return left when keyboard left is being pressed', () => {
    GAME_KEYBOARD.mockImplementationOnce(() => ({
      isPressingLeftKey: () => true,
      isPressingRightKey: () => false,
    }))
    const { detectPlayerControls } = pongPlayerActions()
    const result = detectPlayerControls()
    expect(result).toEqual('left')
  })
  it('should return right when keyboard right is being pressed', () => {
    GAME_KEYBOARD.mockImplementationOnce(() => ({
      isPressingLeftKey: () => false,
      isPressingRightKey: () => true,
    }))
    const { detectPlayerControls } = pongPlayerActions()
    const result = detectPlayerControls()
    expect(result).toEqual('right')
  })
  it('should return left when pong controller is pressing left', () => {
    PC_IS_PRESSING_LEFT_SPY.mockImplementationOnce(() => true)
    const { detectPlayerControls } = pongPlayerActions()
    const result = detectPlayerControls()
    expect(result).toEqual('left')
  })
  it('should return right when pong controller is pressing right', () => {
    PC_IS_PRESSING_RIGHT_SPY.mockImplementationOnce(() => true)
    const { detectPlayerControls } = pongPlayerActions()
    const result = detectPlayerControls()
    expect(result).toEqual('right')
  })
})

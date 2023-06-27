import { renderHook } from '@testing-library/react'
import { usePongBoard } from '../../../../src/components/pong/usePongBoard'
import { PONG_CONFIG_MOCK } from '../../__MOCKS__/pongConfig.mock'
import { usePong } from '../../../../src/canvas-game/pong/usePong'
import { KeyboardListener } from '../../../../src/canvas-game/KeyboardEventListener'

jest.mock('../../../../src/canvas-game/pong/usePong')
jest.mock('../../../../src/canvas-game/KeyboardEventListener')

const USE_PONG = usePong as jest.Mock
const REMOVE_LISTENERS = jest.spyOn(KeyboardListener, 'removeListeners')

const USE_PONG_RETURN_VALUE = {
  gameState: 'playing',
  startGame: () => {},
  resetGame: () => {},
  score: 0,
  canvasWidth: 0,
  canvasRef: null,
  setIsPressingLeftButton: (value: boolean) => value,
  setIsPressingRightButton: (value: boolean) => value,
}

USE_PONG.mockImplementation(() => USE_PONG_RETURN_VALUE)

beforeEach(jest.clearAllMocks)

describe('Use Pong Board', () => {
  it('should call use pong with pong config', () => {
    renderHook(() => usePongBoard(PONG_CONFIG_MOCK))
    expect(USE_PONG).toBeCalledWith({ pongConfig: PONG_CONFIG_MOCK })
  })
  it('should pass score', () => {
    const USE_PONG_SCORE = { ...USE_PONG_RETURN_VALUE, score: 10 }
    USE_PONG.mockImplementationOnce(() => USE_PONG_SCORE)
    const { result } = renderHook(() => usePongBoard(PONG_CONFIG_MOCK))
    expect(result.current.score).toEqual(10)
  })
  it('should invoke pong board de-init', () => {
    const { result } = renderHook(() => usePongBoard(PONG_CONFIG_MOCK))
    result.current.pongBoardDeInit()
    expect(REMOVE_LISTENERS).toHaveBeenCalled()
  })
})

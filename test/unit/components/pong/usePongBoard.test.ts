import { renderHook } from '@testing-library/react'
import { usePongBoard } from '../../../../src/components/pong/usePongBoard'
import { PONG_CONFIG_MOCK } from '../../__MOCKS__/pongConfig.mock'
import { usePong } from '../../../../src/canvas-game/pong/usePong'
import { KeyboardListener } from '../../../../src/canvas-game/KeyboardEventListener'
import { GameState } from '../../../../src/canvas-game/useGameState'

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
  describe('should show menu', () => {
    it('should should NOT show menu while playing', () => {
      const GAME_STATE: GameState = 'playing'
      const USE_PONG_SCORE = { ...USE_PONG_RETURN_VALUE, gameState: GAME_STATE }
      USE_PONG.mockImplementationOnce(() => USE_PONG_SCORE)
      const { result } = renderHook(() => usePongBoard({ ...PONG_CONFIG_MOCK }))
      expect(result.current.shouldShowMenu).toBe(false)
    })
    it('should should show menu while won', () => {
      const GAME_STATE: GameState = 'won'
      const USE_PONG_SCORE = { ...USE_PONG_RETURN_VALUE, gameState: GAME_STATE }
      USE_PONG.mockImplementationOnce(() => USE_PONG_SCORE)
      const { result } = renderHook(() => usePongBoard({ ...PONG_CONFIG_MOCK }))
      expect(result.current.shouldShowMenu).toBe(true)
    })
    it('should should show menu while lost', () => {
      const GAME_STATE: GameState = 'lost'
      const USE_PONG_SCORE = { ...USE_PONG_RETURN_VALUE, gameState: GAME_STATE }
      USE_PONG.mockImplementationOnce(() => USE_PONG_SCORE)
      const { result } = renderHook(() => usePongBoard({ ...PONG_CONFIG_MOCK }))
      expect(result.current.shouldShowMenu).toBe(true)
    })
    it('should should show menu while menu', () => {
      const GAME_STATE: GameState = 'menu'
      const USE_PONG_SCORE = { ...USE_PONG_RETURN_VALUE, gameState: GAME_STATE }
      USE_PONG.mockImplementationOnce(() => USE_PONG_SCORE)
      const { result } = renderHook(() => usePongBoard({ ...PONG_CONFIG_MOCK }))
      expect(result.current.shouldShowMenu).toBe(true)
    })
  })
})

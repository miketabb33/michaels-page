import { act, renderHook } from '@testing-library/react'
import { useWithSquareTTT } from '../../../../src/components/tic-tac-toe/SquareTTT'
import * as MarkerTTTModule from '../../../../src/components/tic-tac-toe/MarkerTTT'
import * as TicTacToeContextModule from '../../../../src/components/tic-tac-toe/TicTacToeProvider'
import { PlayerTTT } from '../../../../src/components/tic-tac-toe/PlayerTTT'

const ON_TURN_END = jest.fn()
const SET_WINNING = jest.fn()
const SET_RED = jest.fn()
const RESET = jest.fn()

const X_OWNER: PlayerTTT = {
  markerID: 'X',
  color: '',
}

const O_OWNER: PlayerTTT = {
  markerID: 'O',
  color: '',
}

const MARKER_BIND: MarkerTTTModule.MarkerTTTProps = {
  markerId: 'X',
  markerSvgBind: { color: '' },
}

const useWithMarkerReturn: MarkerTTTModule.UseWithMarkerTTTReturn = {
  bind: MARKER_BIND,
  setWinning: SET_WINNING,
  setRed: SET_RED,
  reset: RESET,
}

const USE_WITH_MARKER_TTT = jest.spyOn(MarkerTTTModule, 'useWithMarkerTTT')
const UseTicTacToe = jest.spyOn(TicTacToeContextModule, 'useTicTacToe')

beforeEach(jest.clearAllMocks)

describe('Use With Square TTT', () => {
  it('returns marker bind', () => {
    USE_WITH_MARKER_TTT.mockReturnValue(useWithMarkerReturn)
    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))
    expect(result.current.bind.markerBind).toEqual(MARKER_BIND)
  })

  it('inits to not have an owner', () => {
    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))
    expect(result.current.owner).toBeNull()
  })

  it('should set owner when game is not over and the square has no owner', () => {
    const ticTacToe = {
      currentPlayer: X_OWNER,
      isGameOver: false,
    } as unknown as TicTacToeContextModule.TicTacToeContextType
    UseTicTacToe.mockReturnValue(ticTacToe)

    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))
    act(result.current.bind.onClick)

    expect(result.current.owner).toEqual(X_OWNER)
    expect(ON_TURN_END).toHaveBeenCalled()
  })

  it('should NOT set owner when game is over', () => {
    const ticTacToe = {
      currentPlayer: X_OWNER,
      isGameOver: true,
    } as unknown as TicTacToeContextModule.TicTacToeContextType
    UseTicTacToe.mockReturnValue(ticTacToe)

    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))
    act(result.current.bind.onClick)

    expect(result.current.owner).toEqual(null)
    expect(ON_TURN_END).not.toHaveBeenCalled()
  })

  it('should NOT set owner when square is already owned', () => {
    const ticTacToe1 = {
      currentPlayer: X_OWNER,
      isGameOver: false,
    } as unknown as TicTacToeContextModule.TicTacToeContextType
    UseTicTacToe.mockReturnValueOnce(ticTacToe1)

    const ticTacToe2 = {
      currentPlayer: O_OWNER,
      isGameOver: false,
    } as unknown as TicTacToeContextModule.TicTacToeContextType
    UseTicTacToe.mockReturnValueOnce(ticTacToe2)

    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))

    act(result.current.bind.onClick)
    act(result.current.bind.onClick)

    expect(result.current.owner).toEqual(X_OWNER)
  })

  it('should call markers set winner when set winner is called', () => {
    const delay = 0.3
    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))

    act(() => result.current.setWinner(delay))

    expect(SET_WINNING).toHaveBeenCalledWith(delay)
  })

  it('should call markers reset and set owner to null', () => {
    const ticTacToe1 = {
      currentPlayer: X_OWNER,
      isGameOver: false,
    } as unknown as TicTacToeContextModule.TicTacToeContextType
    UseTicTacToe.mockReturnValueOnce(ticTacToe1)

    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))

    act(result.current.bind.onClick)

    expect(result.current.owner).toEqual(X_OWNER)

    act(result.current.reset)

    expect(RESET).toHaveBeenCalled()
    expect(result.current.owner).toBeNull()
  })
})

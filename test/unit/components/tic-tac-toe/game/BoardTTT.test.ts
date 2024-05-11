import { renderHook } from '@testing-library/react'
import { useWithBoardTTT } from '../../../../../src/components/tic-tac-toe/game/BoardTTT'
import * as SquareTTTModule from '../../../../../src/components/tic-tac-toe/game/SquareTTT'

const ON_TURN_END = jest.fn()
const RESET = jest.fn()

const useWithSquare: SquareTTTModule.UseWithSquareTTTReturn = {
  bind: {
    markerBind: { markerSvgBind: { color: '' }, markerId: 'X' },
    onClick: () => {},
  },
  owner: null,
  setWinner: () => {},
  reset: RESET,
}

const USE_WITH_SQUARE_TTT = jest.spyOn(SquareTTTModule, 'useWithSquareTTT')

beforeEach(jest.clearAllMocks)

describe('Use With Board TTT', () => {
  it('should call use with squares and return bind and squares', () => {
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))

    expect(USE_WITH_SQUARE_TTT).toHaveBeenCalledTimes(9)
    expect(USE_WITH_SQUARE_TTT).toHaveBeenCalledWith(ON_TURN_END)
    expect(result.current.bind.squareBinds.length).toEqual(9)
    expect(result.current.squares.length).toEqual(9)
  })

  it('should return is empty true when no spot has an owner', () => {
    USE_WITH_SQUARE_TTT.mockReturnValue(useWithSquare)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    expect(result.current.isEmpty()).toEqual(true)
  })

  it('should return is empty false when spots have an owner', () => {
    const squareReturn: SquareTTTModule.UseWithSquareTTTReturn = {
      ...useWithSquare,
      owner: { color: '', markerID: 'X' },
    }
    USE_WITH_SQUARE_TTT.mockReturnValue(squareReturn)

    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))

    expect(result.current.isEmpty()).toEqual(false)
  })

  it('should return is full true when all spots have an owner', () => {
    const squareReturn: SquareTTTModule.UseWithSquareTTTReturn = {
      ...useWithSquare,
      owner: { color: '', markerID: 'X' },
    }
    USE_WITH_SQUARE_TTT.mockReturnValue(squareReturn)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    expect(result.current.isFull()).toEqual(true)
  })

  it('should return is full false when not all spots have an owner', () => {
    USE_WITH_SQUARE_TTT.mockReturnValue(useWithSquare)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    expect(result.current.isFull()).toEqual(false)
  })

  it('should return is spaces owned as 0 when no spots are owned', () => {
    USE_WITH_SQUARE_TTT.mockReturnValue(useWithSquare)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    expect(result.current.spacesOwned()).toEqual(0)
  })

  it('should return is spaces owned as 9 when all spots are owned', () => {
    const squareReturn: SquareTTTModule.UseWithSquareTTTReturn = {
      ...useWithSquare,
      owner: { color: '', markerID: 'X' },
    }
    USE_WITH_SQUARE_TTT.mockReturnValue(squareReturn)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    expect(result.current.spacesOwned()).toEqual(9)
  })

  it('should call reset for squares when reset is called', () => {
    USE_WITH_SQUARE_TTT.mockReturnValue(useWithSquare)
    const { result } = renderHook(() => useWithBoardTTT(ON_TURN_END))
    result.current.reset()
    expect(RESET).toHaveBeenCalledTimes(9)
  })
})

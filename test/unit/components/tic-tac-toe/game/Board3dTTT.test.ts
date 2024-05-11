import { renderHook } from '@testing-library/react'
import { useWithBoard3dTTT } from '../../../../../src/components/tic-tac-toe/game/Board3dTTT'
import * as BoardTTTModule from '../../../../../src/components/tic-tac-toe/game/BoardTTT'
import { SquareTTTProps } from '../../../../../src/components/tic-tac-toe/game/SquareTTT'

const ON_TURN_END = jest.fn()
const IS_EMPTY = jest.fn()
const IS_FULL = jest.fn()
const SPACES_OWNED = jest.fn()
const RESET = jest.fn()

const squareTTTProps = { fake: 'item' } as unknown as SquareTTTProps
const boardTTTReturn = {
  bind: { squareBinds: [squareTTTProps] },
  squares: [],
  isEmpty: IS_EMPTY,
  isFull: IS_FULL,
  spacesOwned: SPACES_OWNED,
  reset: RESET,
}

const USE_WITH_BOARD = jest.spyOn(BoardTTTModule, 'useWithBoardTTT')

beforeEach(jest.clearAllMocks)

describe('Use With Board 3d TTT', () => {
  it('should invoke use with board 3 times and return bind and squares', () => {
    USE_WITH_BOARD.mockReturnValue(boardTTTReturn)

    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))

    expect(USE_WITH_BOARD).toHaveBeenCalledTimes(3)
    expect(USE_WITH_BOARD).toBeCalledWith(ON_TURN_END)
    expect(result.current.bind.board1Bind.squareBinds.length).toEqual(1)
    expect(result.current.bind.board2Bind.squareBinds.length).toEqual(1)
    expect(result.current.bind.board3Bind.squareBinds.length).toEqual(1)
    expect(result.current.squares.length).toEqual(3)
  })

  it('should invoke reset', () => {
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    result.current.reset()
    expect(RESET).toHaveBeenCalledTimes(3)
  })

  it('should invoke isFull true', () => {
    IS_FULL.mockReturnValue(true)
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    expect(result.current.isFull()).toEqual(true)
    expect(IS_FULL).toBeCalledTimes(3)
  })

  it('should invoke isFull false', () => {
    IS_FULL.mockReturnValue(false)
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    expect(result.current.isFull()).toEqual(false)
  })

  it('should invoke isEmpty true', () => {
    IS_EMPTY.mockReturnValue(true)
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    expect(result.current.isEmpty()).toEqual(true)
    expect(IS_EMPTY).toHaveBeenCalledTimes(3)
  })

  it('should invoke isEmpty false', () => {
    IS_EMPTY.mockReturnValue(false)
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    expect(result.current.isEmpty()).toEqual(false)
  })

  it('should invoke spacesOwned', () => {
    SPACES_OWNED.mockReturnValue(2)
    const { result } = renderHook(() => useWithBoard3dTTT(ON_TURN_END))
    expect(result.current.spacesOwned()).toEqual(6)
  })
})

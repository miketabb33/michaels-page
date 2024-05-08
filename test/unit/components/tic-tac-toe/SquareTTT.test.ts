import { renderHook } from '@testing-library/react'
import { useWithSquareTTT } from '../../../../src/components/tic-tac-toe/SquareTTT'
import * as MarkerTTTModule from '../../../../src/components/tic-tac-toe/MarkerTTT'

const ON_TURN_END = jest.fn()
const SET_WINNING = jest.fn()
const SET_RED = jest.fn()
const RESET = jest.fn()

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

describe('Use With Square TTT', () => {
  it('returns marker bind', () => {
    USE_WITH_MARKER_TTT.mockReturnValue(useWithMarkerReturn)
    const { result } = renderHook(() => useWithSquareTTT(ON_TURN_END))
    expect(result.current.bind.markerBind).toEqual(MARKER_BIND)
  })
})

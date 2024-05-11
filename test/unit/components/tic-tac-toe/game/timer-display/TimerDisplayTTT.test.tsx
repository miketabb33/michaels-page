import { act, renderHook } from '@testing-library/react'
import { useWithTimeDisplayTTTController } from '../../../../../../src/components/tic-tac-toe/game/timer-display/TimerDisplayTTT'
import { PlayerTTT } from '../../../../../../src/components/tic-tac-toe/game/PlayerTTT'
import * as MarkerTTTModule from '../../../../../../src/components/tic-tac-toe/game/MarkerTTT'

const PLAYER: PlayerTTT = {
  markerID: 'X',
  color: 'blue',
}

const TIMER_DID_HIT_0 = jest.fn()
const SET_INTERVAL = jest.spyOn(window, 'setInterval')
const CLEAR_INTERVAL = jest.spyOn(window, 'clearInterval')

const MARKER_RESET = jest.fn()
const MARKER_SET_RED = jest.fn()
jest.spyOn(MarkerTTTModule, 'useWithMarkerTTT').mockReturnValue({
  reset: MARKER_RESET,
  bind: { markerId: 'X', markerSvgBind: { color: '' } },
  setWinning: () => {},
  setRed: MARKER_SET_RED,
})

beforeEach(jest.clearAllMocks)

describe('Use With Timer Display TTT Controller', () => {
  it('should start timer and timer use effect', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(result.current.startTimer)

    expect(result.current.timerEffect.deps).toEqual([true])
    const effectReturn = result.current.timerEffect.effect()

    expect(SET_INTERVAL).toHaveBeenCalledWith(result.current.updateTime, 50)

    if (effectReturn) effectReturn()
    expect(CLEAR_INTERVAL).toHaveBeenCalled()
  })

  it('should stop timer and timer use effect', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(result.current.startTimer)
    act(result.current.stopTimer)

    expect(result.current.timerEffect.deps).toEqual([false])
    const effectReturn = result.current.timerEffect.effect()

    expect(SET_INTERVAL).not.toHaveBeenCalled()

    if (effectReturn) effectReturn()
    expect(CLEAR_INTERVAL).not.toHaveBeenCalled()
  })

  it('should decrement time left and reset', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(() => result.current.setTime(10))
    expect(result.current.noTimeLeftEffect.deps).toEqual([10])

    act(result.current.updateTime)

    expect(result.current.noTimeLeftEffect.deps).toEqual([5])
    expect(MARKER_RESET).not.toHaveBeenCalled()
  })

  it('should reset time', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(() => result.current.setTime(10))

    act(result.current.reset)

    expect(result.current.noTimeLeftEffect.deps).toEqual([1000])
    expect(MARKER_RESET).toHaveBeenCalled()
  })

  it('should not trigger no time left behavior when time is left', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(result.current.startTimer)

    act(() => {
      result.current.noTimeLeftEffect.effect()
    })

    expect(TIMER_DID_HIT_0).not.toHaveBeenCalled()
    expect(result.current.timerEffect.deps).toEqual([true])
    expect(MARKER_SET_RED).not.toHaveBeenCalled()
  })

  it('should trigger no time left behavior when no time is left', () => {
    const { result } = renderHook(() => useWithTimeDisplayTTTController(PLAYER, TIMER_DID_HIT_0))
    act(() => result.current.setTime(5))
    act(result.current.startTimer)
    act(result.current.updateTime)

    act(() => {
      result.current.noTimeLeftEffect.effect()
    })

    expect(TIMER_DID_HIT_0).toHaveBeenCalled()
    expect(result.current.timerEffect.deps).toEqual([false])
    expect(MARKER_SET_RED).toHaveBeenCalled()
  })
})

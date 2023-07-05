import { useScore } from '../../../src/canvas-game/useScore'
import { renderHook, act } from '@testing-library/react'

describe('Use Score', () => {
  it('should start at 0', () => {
    const { result } = renderHook(() => useScore())
    expect(result.current.score).toEqual(0)
    expect(result.current.inGameScore.value).toEqual(0)
  })

  it('should increment', () => {
    const { result } = renderHook(() => useScore())
    act(() => result.current.incrementScore())
    expect(result.current.score).toEqual(1)
  })
})

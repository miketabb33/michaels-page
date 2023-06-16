import { renderHook } from '@testing-library/react'
import { useGameState } from '../../../src/canvas-game/useGameState'
import { act } from 'react-dom/test-utils'

describe('Use Game State', () => {
  it('should init as menu', () => {
    const { result } = renderHook(() => useGameState())
    expect(result.current.gameState).toEqual('menu')
  })

  it('should set state to playing', () => {
    const { result } = renderHook(() => useGameState())
    act(() => result.current.setGameState('playing'))
    expect(result.current.gameState).toEqual('playing')
  })
})

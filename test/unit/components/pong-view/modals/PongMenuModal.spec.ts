import { renderHook } from '@testing-library/react'
import { usePongMenuModal } from '../../../../../src/components/pong-view/modals/PongMenuModal'
import { act } from 'react-dom/test-utils'

describe('Use Pong Menu Modal', () => {
  it('should init as main', () => {
    const { result } = renderHook(() => usePongMenuModal())
    expect(result.current.showingScreen).toEqual('main')
  })

  it('should set to high score', () => {
    const { result } = renderHook(() => usePongMenuModal())
    act(() => result.current.showHighScoreScreen())
    expect(result.current.showingScreen).toEqual('highScore')
  })

  it('should set to main', () => {
    const { result } = renderHook(() => usePongMenuModal())
    act(() => result.current.showHighScoreScreen())
    act(() => result.current.showMainScreen())
    expect(result.current.showingScreen).toEqual('main')
  })
})

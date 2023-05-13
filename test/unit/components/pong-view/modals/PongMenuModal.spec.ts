import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { usePongMenu } from '../../../../../src/components/pong-view/modals/menu-modal/PongMenuModal'

describe('Use Pong Menu Modal', () => {
  it('should init as main', () => {
    const { result } = renderHook(() => usePongMenu())
    expect(result.current.showingScreen).toEqual('main')
  })

  it('should set to high score', () => {
    const { result } = renderHook(() => usePongMenu())
    act(() => result.current.showHighScoreScreen())
    expect(result.current.showingScreen).toEqual('highScore')
  })

  it('should set to main', () => {
    const { result } = renderHook(() => usePongMenu())
    act(() => result.current.showHighScoreScreen())
    act(() => result.current.showMainScreen())
    expect(result.current.showingScreen).toEqual('main')
  })
})

import { renderHook } from '@testing-library/react'
import { useWithFlipper } from '../../../../src/components/m-blocks/Flipper'
import { act } from 'react-dom/test-utils'

describe('Use With Flipper', () => {
  it('should return initial bind', () => {
    const { result } = renderHook(() => useWithFlipper({ front: 'front', back: 'back' }))
    expect(result.current.bind).toEqual({ back: 'back', front: 'front', shouldShowBack: false })
  })

  it('should flip', () => {
    const { result } = renderHook(() => useWithFlipper({ front: 'front', back: 'back' }))
    act(result.current.flip)
    expect(result.current.bind.shouldShowBack).toBe(true)
    act(result.current.flip)
    expect(result.current.bind.shouldShowBack).toBe(false)
  })
})

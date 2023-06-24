import { act, renderHook } from '@testing-library/react'
import { useRequestController } from '../../../src/network/useRequest'

describe('Use Request Controller', () => {
  it('should init', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const request = () => new Promise((_, __) => {})
    const { result } = renderHook(() => useRequestController({ request }))
    expect(result.current.isLoading).toEqual(true)
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBeNull()
  })
  it('should call request successfully', async () => {
    const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE'
    const request = () => Promise.resolve(SUCCESS_RESPONSE)
    const { result } = renderHook(() => useRequestController({ request }))
    await act(async () => {
      result.current.callRequest()
      await Promise.resolve()
    })
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.data).toEqual(SUCCESS_RESPONSE)
    expect(result.current.error).toBeNull()
  })
  it('should call request with error', async () => {
    const ERROR = new Error('ERROR')
    const request = () => Promise.reject(ERROR)
    const { result } = renderHook(() => useRequestController({ request }))
    await act(async () => {
      result.current.callRequest()
      await Promise.resolve()
    })
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.data).toBeNull()
    expect(result.current.error).toEqual(ERROR)
  })
})

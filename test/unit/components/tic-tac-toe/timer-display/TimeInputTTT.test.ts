import { act, renderHook } from '@testing-library/react'
import { useWithTimeInputTTT } from '../../../../../src/components/tic-tac-toe/TimeInputTTT'
import { ChangeEvent } from 'react'

describe('Use With Time Input TTT', () => {
  it('should init hidden false', () => {
    const { result } = renderHook(() => useWithTimeInputTTT(false))
    expect(result.current.bind.isHidden).toEqual(false)
  })
  it('should init hidden true', () => {
    const { result } = renderHook(() => useWithTimeInputTTT(true))
    expect(result.current.bind.isHidden).toEqual(true)
  })
  it('should toggle hidden', () => {
    const { result } = renderHook(() => useWithTimeInputTTT(true))
    expect(result.current.bind.isHidden).toEqual(true)
    act(result.current.show)
    expect(result.current.bind.isHidden).toEqual(false)
    act(result.current.hide)
    expect(result.current.bind.isHidden).toEqual(true)
  })
  it('should change value for numbers', () => {
    const VALUE = '345'
    const { result } = renderHook(() => useWithTimeInputTTT(false))
    const event = { target: { value: VALUE } } as ChangeEvent<HTMLInputElement>
    act(() => result.current.bind.inputBind.onChange(event))
    expect(result.current.value).toEqual(VALUE)
  })
  it('should NOT change value for letters', () => {
    const VALUE = 'invalid'
    const { result } = renderHook(() => useWithTimeInputTTT(false))
    const event = { target: { value: VALUE } } as ChangeEvent<HTMLInputElement>
    act(() => result.current.bind.inputBind.onChange(event))
    expect(result.current.value).toEqual('')
  })
})

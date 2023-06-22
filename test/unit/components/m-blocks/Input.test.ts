import { act, renderHook } from '@testing-library/react'
import { useWithInput } from '../../../../src/components/m-blocks/Input'
import { ChangeEvent } from 'react'

describe('Use With Input', () => {
  it('should return initial bind', () => {
    const PLACEHOLDER = 'PLACEHOLDER'
    const { result } = renderHook(() => useWithInput({ placeholder: PLACEHOLDER }))
    expect(result.current.bind.placeholder).toEqual(PLACEHOLDER)
    expect(result.current.value).toEqual('')
  })
  it('should change value on change', () => {
    const VALUE = 'VALUE'
    const { result } = renderHook(() => useWithInput({}))
    const event = { target: { value: VALUE } } as ChangeEvent<HTMLInputElement>
    act(() => result.current.bind.onChange(event))
    expect(result.current.value).toEqual(VALUE)
  })
})

import { act, renderHook } from '@testing-library/react'
import { useThemeProvider } from '../../../src/context/ThemeContext'

describe('Use Theme Context', () => {
  it('should default to light theme when not found in storage', () => {
    const { result } = renderHook(useThemeProvider)
    expect(result.current.theme).toEqual('light')
  })
  it('should set dark theme when found in storage', () => {
    const GET_ITEM = jest.spyOn(Storage.prototype, 'getItem')
    GET_ITEM.mockImplementationOnce(() => 'dark')

    const { result } = renderHook(useThemeProvider)

    expect(result.current.theme).toEqual('dark')
    expect(GET_ITEM).toHaveBeenCalledWith('theme')
  })
  it('should toggle to dark theme and set storage', () => {
    const SET_ITEM = jest.spyOn(Storage.prototype, 'setItem')
    const { result } = renderHook(useThemeProvider)

    act(result.current.toggleTheme)

    expect(result.current.theme).toEqual('dark')
    expect(SET_ITEM).toHaveBeenCalledWith('theme', 'dark')
  })
})

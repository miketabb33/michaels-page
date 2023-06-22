import { renderHook } from '@testing-library/react'
import { useNavigationTheme } from '../../../../src/components/navigation/useNavigationTheme'
import { useTheme } from '../../../../src/context/ThemeContext'

jest.mock('../../../../src/context/ThemeContext')

const USE_THEME = useTheme as jest.Mock

describe('Use Navigation Theme', () => {
  it('should return content for dark toggle', () => {
    USE_THEME.mockImplementationOnce(() => ({ theme: 'light' }))
    const { result } = renderHook(useNavigationTheme)
    expect(result.current.themeButtonText).toEqual('Dark')
  })
  it('should return content for light toggle', () => {
    USE_THEME.mockImplementationOnce(() => ({ theme: 'dark' }))
    const { result } = renderHook(useNavigationTheme)
    expect(result.current.themeButtonText).toEqual('Light')
  })
  it('should invoke toggle theme', () => {
    const TOGGLE_THEME = jest.fn()
    USE_THEME.mockImplementationOnce(() => ({ toggleTheme: TOGGLE_THEME }))
    const { result } = renderHook(useNavigationTheme)
    result.current.toggleTheme()
    expect(TOGGLE_THEME).toHaveBeenCalled()
  })
})

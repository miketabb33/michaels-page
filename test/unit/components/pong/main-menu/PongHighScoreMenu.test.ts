import { renderHook } from '@testing-library/react'
import { usePongHighScoreMenu } from '../../../../../src/components/pong/menu-modal/PongHighScoreMenu'
import { useRequest } from '../../../../../src/network/useRequest'
import { HighScore } from '../../../../../src/network/pong/scores'

jest.mock('../../../../../src/network/useRequest')

const USE_REQUEST = useRequest as jest.Mock

const CLICK_BACK = jest.fn()

beforeEach(jest.clearAllMocks)

describe('Use PongHigh Score Menu', () => {
  it('should show loading', () => {
    USE_REQUEST.mockImplementationOnce(() => ({ isLoading: true }))
    const { result } = renderHook(() => usePongHighScoreMenu({ onBack: CLICK_BACK }))
    expect(result.current.shouldShowHighScores).toBe(false)
    expect(result.current.shouldShowNoHighScores).toBe(false)

    expect(result.current.shouldShowLoading).toBe(true)
  })
  it('should show no high score', () => {
    USE_REQUEST.mockImplementationOnce(() => ({ isLoading: false, data: [] }))
    const { result } = renderHook(() => usePongHighScoreMenu({ onBack: CLICK_BACK }))
    expect(result.current.shouldShowLoading).toBe(false)
    expect(result.current.shouldShowHighScores).toBe(false)

    expect(result.current.shouldShowNoHighScores).toBe(true)
  })
  it('should show high score', () => {
    USE_REQUEST.mockImplementationOnce(() => ({
      isLoading: false,
      data: HIGH_SCORE_MOCK,
    }))
    const { result } = renderHook(() => usePongHighScoreMenu({ onBack: CLICK_BACK }))
    expect(result.current.shouldShowLoading).toBe(false)
    expect(result.current.shouldShowNoHighScores).toBe(false)

    expect(result.current.shouldShowHighScores).toBe(true)
    expect(result.current.highScores).toEqual(HIGH_SCORE_MOCK)
  })

  it('should invoke on back', () => {
    USE_REQUEST.mockImplementationOnce(() => ({ isLoading: true }))
    const { result } = renderHook(() => usePongHighScoreMenu({ onBack: CLICK_BACK }))
    result.current.onBack()
    expect(CLICK_BACK).toBeCalledTimes(1)
  })
})

const HIGH_SCORE_MOCK: HighScore[] = [
  { id: 'test_1', name: 'test1', score: 0 },
  { id: 'test_2', name: 'test2', score: 5 },
]

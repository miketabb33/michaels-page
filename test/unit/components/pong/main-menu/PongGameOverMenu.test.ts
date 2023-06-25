import { renderHook } from '@testing-library/react'
import { usePongGameOverMenu } from '../../../../../src/components/pong/menu-modal/PongGameOverMenu'
import { saveScore } from '../../../../../src/network/pong/scores'
import { useWithInput } from '../../../../../src/components/m-blocks/Input'

jest.mock('../../../../../src/network/pong/scores')
jest.mock('../../../../../src/components/m-blocks/Input')

const SAVE_SCORE = saveScore as jest.Mock
SAVE_SCORE.mockImplementation(() => Promise.resolve())

const USE_WITH_INPUT = useWithInput as jest.Mock
USE_WITH_INPUT.mockImplementation(() => ({ value: '' }))

const ON_RETURN_TO_MAIN_MENU = jest.fn()
const SCORE = 42

beforeEach(jest.clearAllMocks)

describe('Use Pong Game Over Menu', () => {
  it('should init', () => {
    const { result } = renderHook(() =>
      usePongGameOverMenu({ onReturnToMainMenu: ON_RETURN_TO_MAIN_MENU, score: SCORE })
    )
    expect(result.current.score).toEqual(SCORE)
    expect(result.current.gameOverTitle).not.toBeUndefined()
    expect(result.current.nameInput).not.toBeUndefined()
  })
  it('should save when onSave is invoked', () => {
    const { result } = renderHook(() =>
      usePongGameOverMenu({ onReturnToMainMenu: ON_RETURN_TO_MAIN_MENU, score: SCORE })
    )
    result.current.onSave()
    expect(SAVE_SCORE).toHaveBeenCalled()
    expect(ON_RETURN_TO_MAIN_MENU).toHaveBeenCalled()
  })
  it('should save with name from Input when onSave is invoked', () => {
    const NAME = 'NAME'
    USE_WITH_INPUT.mockImplementationOnce(() => ({ value: NAME }))
    const { result } = renderHook(() =>
      usePongGameOverMenu({ onReturnToMainMenu: ON_RETURN_TO_MAIN_MENU, score: SCORE })
    )
    result.current.onSave()
    expect(SAVE_SCORE).toHaveBeenCalledWith({ name: NAME, score: SCORE })
    expect(ON_RETURN_TO_MAIN_MENU).toHaveBeenCalled()
  })
  it('should call on return to main menu', () => {
    const { result } = renderHook(() =>
      usePongGameOverMenu({ onReturnToMainMenu: ON_RETURN_TO_MAIN_MENU, score: SCORE })
    )
    result.current.onReturnToMainMenu()
    expect(ON_RETURN_TO_MAIN_MENU).toHaveBeenCalled()
  })
})

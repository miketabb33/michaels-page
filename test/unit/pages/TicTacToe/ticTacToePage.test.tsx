import { renderHook } from '@testing-library/react'
import * as RouterModule from '../../../../src/router/useRouter'
import { useInTicTacToePage } from '../../../../src/pages/TicTacToe/TicTacToePage'
import { PATH_VALUES } from '../../../../src/router/pathValues'

const NAVIGATE_TO = jest.fn()
jest
  .spyOn(RouterModule, 'useRouter')
  .mockReturnValue({ navigateTo: NAVIGATE_TO } as unknown as RouterModule.UseRouterReturn)

beforeEach(jest.clearAllMocks)

describe('Use In Tic Tac Toe Page', () => {
  it('should call regular', () => {
    const { result } = renderHook(useInTicTacToePage)
    result.current.navigateToRegular()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.regular)
  })

  it('should call timed', () => {
    const { result } = renderHook(useInTicTacToePage)
    result.current.navigateToTimed()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.timed)
  })

  it('should call 3d', () => {
    const { result } = renderHook(useInTicTacToePage)
    result.current.navigateTo3d()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.threeD)
  })
})

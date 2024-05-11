import { renderHook } from '@testing-library/react'
import * as RouterModule from '../../../../src/router/useRouter'
import { PATH_VALUES } from '../../../../src/router/pathValues'
import { useInTicTacToeMenu } from '../../../../src/components/tic-tac-toe/TicTacToeMenu'

const NAVIGATE_TO = jest.fn()
jest
  .spyOn(RouterModule, 'useRouter')
  .mockReturnValue({ navigateTo: NAVIGATE_TO } as unknown as RouterModule.UseRouterReturn)

beforeEach(jest.clearAllMocks)

describe('Use In Tic Tac Toe Menu', () => {
  it('should call regular', () => {
    const { result } = renderHook(useInTicTacToeMenu)
    result.current.navigateToRegular()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.regular)
  })

  it('should call timed', () => {
    const { result } = renderHook(useInTicTacToeMenu)
    result.current.navigateToTimed()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.timed)
  })

  it('should call 3d', () => {
    const { result } = renderHook(useInTicTacToeMenu)
    result.current.navigateTo3d()
    expect(NAVIGATE_TO).toHaveBeenCalledWith(PATH_VALUES.ticTacToe.threeD)
  })
})

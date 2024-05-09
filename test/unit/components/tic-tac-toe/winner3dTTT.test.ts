import { checkFor3dWinner } from '../../../../src/components/tic-tac-toe/winner3dTTT'
import * as WinnerTTTModule from '../../../../src/components/tic-tac-toe/winnerTTT'
import { useWithSquareTTTReturnTestFactory } from './useWithSquareTTTReturnTestFactory'

const SET_WINNER = jest.fn()

const CHECK_FOR_WINNER = jest.spyOn(WinnerTTTModule, 'checkForWinner')

beforeEach(jest.clearAllMocks)

describe('Winner 3d TTT', () => {
  it('should return null when there are no owners', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const nullSquares = [null, null, null, null, null, null, null, null, null]

    const board1 = makeSquares(nullSquares)
    const board2 = makeSquares(nullSquares)
    const board3 = makeSquares(nullSquares)

    const winner = checkFor3dWinner([board1, board2, board3])
    expect(SET_WINNER).not.toHaveBeenCalled()
    expect(winner).toBe(null)
  })

  it('should check for winner 3 times for each board, by spinning the plane of each board', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const nullSquares = [null, null, null, null, null, null, null, null, null]

    const board1 = makeSquares(nullSquares)
    const board2 = makeSquares(nullSquares)
    const board3 = makeSquares(nullSquares)

    checkFor3dWinner([board1, board2, board3])

    expect(CHECK_FOR_WINNER).toHaveBeenCalledTimes(9)
  })

  it('should return null when there are no winners', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)

    const board1 = makeSquares([null, 'X', null, null, null, null, null, null, null])
    const board2 = makeSquares([null, null, null, 'O', null, null, null, null, null])
    const board3 = makeSquares([null, null, null, null, null, null, 'X', null, null])

    const winner = checkFor3dWinner([board1, board2, board3])
    expect(SET_WINNER).not.toHaveBeenCalled()
    expect(winner).toBe(null)
  })

  it('should return winner when there is a cross board match', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)

    const board1 = makeSquares(['X', null, null, null, null, null, null, null, null])
    const board2 = makeSquares(['X', null, null, 'O', null, null, null, null, null])
    const board3 = makeSquares(['X', null, null, null, null, null, 'O', null, null])

    const winner = checkFor3dWinner([board1, board2, board3])
    expect(SET_WINNER).toHaveBeenCalled()
    expect(winner?.markerID).toBe('X')
  })

  it('should return winner when there is a up/down cross board match', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)

    const board1 = makeSquares(['X', null, null, null, null, null, null, null, 'O'])
    const board2 = makeSquares([null, null, null, 'X', 'O', null, null, null, null])
    const board3 = makeSquares([null, null, null, null, null, null, 'X', null, null])

    const winner = checkFor3dWinner([board1, board2, board3])
    expect(SET_WINNER).toHaveBeenCalled()
    expect(winner?.markerID).toBe('X')
  })

  it('should return winner when there is a diagonal cross board match', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)

    const board1 = makeSquares([null, null, 'X', null, null, null, null, null, null])
    const board2 = makeSquares([null, null, null, null, 'X', null, null, null, null])
    const board3 = makeSquares([null, null, null, null, null, null, 'X', null, null])

    const winner = checkFor3dWinner([board1, board2, board3])
    expect(SET_WINNER).toHaveBeenCalled()
    expect(winner?.markerID).toBe('X')
  })
})

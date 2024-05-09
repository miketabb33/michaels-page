import { MarkerIdTTT } from '../../../../src/components/tic-tac-toe/PlayerTTT'
import { checkForWinner } from '../../../../src/components/tic-tac-toe/winnerTTT'
import { useWithSquareTTTReturnTestFactory } from './useWithSquareTTTReturnTestFactory'

const SET_WINNER = jest.fn()

beforeEach(jest.clearAllMocks)

describe('Winner TTT', () => {
  it('should return null when there are no owners', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)

    const squares = makeSquares([null, null, null, null, null, null, null, null, null])

    const winner = checkForWinner(squares)
    expect(SET_WINNER).not.toHaveBeenCalled()
    expect(winner).toBe(null)
  })

  it('should return null when there are no wins', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const squares = makeSquares([null, 'X', null, null, 'O', null, null, 'X', null])

    const winner = checkForWinner(squares)
    expect(SET_WINNER).not.toHaveBeenCalled()
    expect(winner).toBe(null)
  })

  it('should return winning player when there is a cross win', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const squares = makeSquares(['X', 'X', 'X', null, 'O', null, 'O', null, null])

    const winner = checkForWinner(squares)
    expect(SET_WINNER).toHaveBeenCalledTimes(3)
    expect(winner?.markerID).toBe('X')
  })

  it('should return winning player when there is a up/down win', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const squares = makeSquares(['X', 'O', 'X', null, 'O', 'X', 'X', 'O', null])

    const winner = checkForWinner(squares)
    expect(SET_WINNER).toHaveBeenCalledTimes(3)
    expect(winner?.markerID).toBe('O')
  })

  it('should return winning player when there is a diagonal win', () => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const squares = makeSquares(['X', 'O', 'O', null, 'X', 'O', 'O', null, 'X'])

    const winner = checkForWinner(squares)
    expect(SET_WINNER).toHaveBeenCalledTimes(3)
    expect(winner?.markerID).toBe('X')
  })

  it.each<(MarkerIdTTT | null)[][]>([
    [['X', 'X', 'X', null, null, null, null, null, null]],
    [[null, null, null, 'X', 'X', 'X', null, null, null]],
    [[null, null, null, null, null, null, 'X', 'X', 'X']],
    [['X', null, null, 'X', null, null, 'X', null, null]],
    [[null, 'X', null, null, 'X', null, null, 'X', null]],
    [[null, null, 'X', null, null, 'X', null, null, 'X']],
    [['X', null, null, null, 'X', null, null, null, 'X']],
    [[null, null, 'X', null, 'X', null, 'X', null, null]],
  ])('should return winning player for all variations', (arr) => {
    const { makeSquares } = useWithSquareTTTReturnTestFactory(SET_WINNER)
    const squares = makeSquares(arr)

    const winner = checkForWinner(squares)
    expect(SET_WINNER).toHaveBeenCalledTimes(3)
    expect(winner?.markerID).toBe('X')
  })
})

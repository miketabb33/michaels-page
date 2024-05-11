import { act, renderHook } from '@testing-library/react'
import { useTicTacToeProvider } from '../../../../../src/components/tic-tac-toe/game/TicTacToeProvider'
import { PlayerTTT } from '../../../../../src/components/tic-tac-toe/game/PlayerTTT'

const X_PLAYER: PlayerTTT = {
  markerID: 'X',
  color: '',
}

const O_PLAYER: PlayerTTT = {
  markerID: 'O',
  color: '',
}

beforeEach(jest.clearAllMocks)

describe('Use Tic Tac Toe Provider', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    expect(result.current.value.currentPlayer).toEqual(X_PLAYER)
    expect(result.current.value.isGameOver).toEqual(false)
    expect(result.current.value.players).toEqual([X_PLAYER, O_PLAYER])
    expect(result.current.value.winner).toBeNull()
  })

  it('should set game over and reset game', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    act(result.current.value.gameOver)
    expect(result.current.value.isGameOver).toEqual(true)

    act(result.current.value.reset)
    expect(result.current.value.isGameOver).toEqual(false)
  })

  it('should set winner', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    act(() => result.current.value.setWinner(O_PLAYER))
    expect(result.current.value.winner).toEqual(O_PLAYER)
  })

  it('should set next player', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    expect(result.current.value.currentPlayer).toEqual(X_PLAYER)
    act(result.current.value.nextPlayer)
    expect(result.current.value.currentPlayer).toEqual(O_PLAYER)
    act(result.current.value.nextPlayer)
    expect(result.current.value.currentPlayer).toEqual(X_PLAYER)
  })

  it('should reset state when game over changes to false', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    act(result.current.value.nextPlayer)
    act(() => result.current.value.setWinner(O_PLAYER))

    act(() => void result.current.resetGameEffect.effect())

    expect(result.current.value.currentPlayer).toEqual(X_PLAYER)
    expect(result.current.value.winner).toBeNull()
  })

  it('should NOT reset state when game over changes to true', () => {
    const { result } = renderHook(() => useTicTacToeProvider([X_PLAYER, O_PLAYER]))
    act(result.current.value.nextPlayer)
    act(() => result.current.value.setWinner(O_PLAYER))
    act(result.current.value.gameOver)

    act(() => void result.current.resetGameEffect.effect())

    expect(result.current.value.currentPlayer).toEqual(O_PLAYER)
    expect(result.current.value.winner).toEqual(O_PLAYER)
  })
})

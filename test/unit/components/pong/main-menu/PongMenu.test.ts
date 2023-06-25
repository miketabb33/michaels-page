import { act, renderHook } from '@testing-library/react'
import { usePongMenu } from '../../../../../src/components/pong/menu-modal/PongMenu'

const START_GAME = jest.fn()
const RESET_GAME = jest.fn()

const SCORE = 42

describe('Use Pong Menu', () => {
  describe('Init menu with Game State', () => {
    it('should be gameOver when game state is won', () => {
      const GAME_STATE = 'won'
      const { result } = renderHook(() =>
        usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
      )
      expect(result.current.menu).toEqual('gameOver')
    })
    it('should be gameOver when game state is lost', () => {
      const GAME_STATE = 'lost'
      const { result } = renderHook(() =>
        usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
      )
      expect(result.current.menu).toEqual('gameOver')
    })
    it('should be main when game state is menu', () => {
      const GAME_STATE = 'menu'
      const { result } = renderHook(() =>
        usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
      )
      expect(result.current.menu).toEqual('main')
    })
    it('should be none when game state is playing', () => {
      const GAME_STATE = 'playing'
      const { result } = renderHook(() =>
        usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
      )
      expect(result.current.menu).toEqual('none')
    })
  })
  it('should pass score', () => {
    const GAME_STATE = 'playing'
    const { result } = renderHook(() =>
      usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
    )
    expect(result.current.score).toEqual(SCORE)
  })
  it('should pass start game', () => {
    const GAME_STATE = 'playing'
    const { result } = renderHook(() =>
      usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
    )
    result.current.startGame()
    expect(START_GAME).toHaveBeenCalled()
  })
  it('should set menu to main', () => {
    const GAME_STATE = 'playing'
    const { result } = renderHook(() =>
      usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
    )
    act(result.current.setMenuToMain)

    expect(result.current.menu).toEqual('main')
  })
  it('should set menu to high score', () => {
    const GAME_STATE = 'playing'
    const { result } = renderHook(() =>
      usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
    )
    act(result.current.setMenuToHighScore)

    expect(result.current.menu).toEqual('highScore')
  })
  it('should invoke on game overs main menu', () => {
    const GAME_STATE = 'playing'
    const { result } = renderHook(() =>
      usePongMenu({ gameState: GAME_STATE, score: SCORE, startGame: START_GAME, resetGame: RESET_GAME })
    )
    act(result.current.onGameOversMainMenu)

    expect(result.current.menu).toEqual('main')
    expect(RESET_GAME).toHaveBeenCalled()
  })
})

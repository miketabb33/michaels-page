import { useState } from 'react'

export type GameState = 'playing' | 'menu' | 'won' | 'lost'

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>('menu')

  return {
    gameState,
    setGameState,
  }
}

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import { OPlayer, PlayerTTT, XPlayer } from './PlayerTTT'

type TicTacToeContextType = {
  isGameOver: boolean
  currentPlayer: PlayerTTT
  players: PlayerTTT[]
  winner?: PlayerTTT
  nextPlayer: () => void
  gameOver: () => void
  setWinner: (winner: PlayerTTT) => void
  reset: () => void
}

const TicTacToeContext = createContext<TicTacToeContextType>({
  isGameOver: true,
  currentPlayer: {
    markerID: 'X',
    color: '',
  },
  players: [],
  winner: undefined,
  nextPlayer: () => {},
  gameOver: () => {},
  setWinner: () => {},
  reset: () => {},
})

export const useTicTacToeProvider = (players: PlayerTTT[]) => {
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState<PlayerTTT | undefined>(undefined)
  const [currentPlayer, setCurrentPlayer] = useState<PlayerTTT>(players[0])

  const gameOver = () => {
    setIsGameOver(true)
  }

  const nextPlayer = () => {
    setCurrentPlayer((prev) => {
      const nextIndex = players.indexOf(prev) + 1
      if (nextIndex >= players.length) return players[0]
      return players[nextIndex]
    })
  }

  const reset = () => {
    setIsGameOver(false)
  }

  useEffect(() => {
    if (!isGameOver) {
      setCurrentPlayer(players[0])
      setWinner(undefined)
    }
  }, [isGameOver])

  return {
    isGameOver,
    currentPlayer,
    players,
    winner,
    gameOver,
    nextPlayer,
    setWinner,
    reset,
  }
}

export const TicTacToeProvider = ({ children }: ChildrenProp) => {
  const value = useTicTacToeProvider([XPlayer, OPlayer])

  return <TicTacToeContext.Provider value={value}>{children}</TicTacToeContext.Provider>
}

export const useTicTacToe = (): TicTacToeContextType => {
  return useContext(TicTacToeContext)
}

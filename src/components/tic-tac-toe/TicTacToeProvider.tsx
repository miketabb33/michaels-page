import React, { createContext, useContext, useEffect, useState } from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import { OPlayer, PlayerTTT, XPlayer } from './PlayerTTT'
import { UseEffectType } from '../../types/UseEffectType'

export type TicTacToeContextType = {
  isGameOver: boolean
  currentPlayer: PlayerTTT
  players: PlayerTTT[]
  winner: PlayerTTT | null
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
  winner: null,
  nextPlayer: () => {},
  gameOver: () => {},
  setWinner: () => {},
  reset: () => {},
})

export const useTicTacToeProvider = (players: PlayerTTT[]) => {
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState<PlayerTTT | null>(null)
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

  const resetGameEffect: UseEffectType = {
    effect: () => {
      if (!isGameOver) {
        setCurrentPlayer(players[0])
        setWinner(null)
      }
    },
    deps: [isGameOver],
  }

  return {
    value: {
      isGameOver,
      currentPlayer,
      players,
      winner,
      gameOver,
      nextPlayer,
      setWinner,
      reset,
    },
    resetGameEffect,
  }
}

export const TicTacToeProvider = ({ children }: ChildrenProp) => {
  const { value, resetGameEffect } = useTicTacToeProvider([XPlayer, OPlayer])

  useEffect(resetGameEffect.effect, resetGameEffect.deps)

  return <TicTacToeContext.Provider value={value}>{children}</TicTacToeContext.Provider>
}

export const useTicTacToe = (): TicTacToeContextType => {
  return useContext(TicTacToeContext)
}

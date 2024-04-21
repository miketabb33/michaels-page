import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayerTTT } from './PlayerTTT'
import { MarkerTTTProps } from './svg/MarkerSvgTTT'
import { useTicTacToe } from './TicTacToeProvider'

const Square = styled.button<{ $isWinningSquare?: boolean }>`
  display: block;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 1rem;
  cursor: pointer;
  animation: ${({ $isWinningSquare }) => $isWinningSquare && 'flash 2s infinite'};

  @keyframes flash {
    0% {
      transform: rotate(0);
    }

    10% {
      transform: rotate(10deg);
    }

    20% {
      transform: rotate(-15deg);
    }

    30% {
      transform: rotate(0);
    }
  }
`

export type SquareTTTProps = {
  owner?: PlayerTTT | undefined
  isWinning: boolean
  marker: MarkerTTTProps
  onClick: () => void
}

const SquareTTT = ({ owner, isWinning, marker, onClick }: SquareTTTProps) => {
  return (
    <Square $isWinningSquare={isWinning} onClick={onClick}>
      {owner?.makeComponent(marker)}
    </Square>
  )
}

export type UseWithSquareTTTReturn = {
  bind: SquareTTTProps
  owner?: PlayerTTT
  setWinner: () => void
  reset: () => void
}

export const useWithSquareTTT = (onTurnEnd: () => void): UseWithSquareTTTReturn => {
  const { isGameOver, currentPlayer } = useTicTacToe()

  const WINNING_COLOR = '#D7E725'

  const [isWinning, setIsWinning] = useState(false)
  const [owner, setOwner] = useState<PlayerTTT | undefined>(undefined)

  useEffect(() => {
    onTurnEnd()
  }, [owner])

  const setWinner = () => {
    setIsWinning(true)
  }

  const reset = () => {
    setIsWinning(false)
    setOwner(undefined)
  }

  const onClick = () => {
    if (isGameOver || owner) return
    setOwner(currentPlayer)
  }

  let marker: MarkerTTTProps

  if (!owner) {
    marker = { size: '', color: '' }
  } else {
    const markerColor = isWinning ? WINNING_COLOR : owner.color
    marker = { size: '100%', color: markerColor }
  }

  return {
    bind: {
      marker,
      isWinning,
      owner,
      onClick,
    },
    setWinner,
    owner,
    reset,
  }
}

export default SquareTTT

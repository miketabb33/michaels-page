import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayerTTT } from './PlayerTTT'
import { useTicTacToe } from './TicTacToeProvider'
import MarkerTTT, { MarkerTTTProps, useWithMarkerTTT } from './MarkerTTT'

const Square = styled.button`
  display: block;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 1rem;
  cursor: pointer;
`

export type SquareTTTProps = {
  markerBind: MarkerTTTProps
  onClick: () => void
}

const SquareTTT = ({ markerBind, onClick }: SquareTTTProps) => {
  return (
    <Square onClick={onClick}>
      <MarkerTTT {...markerBind} />
    </Square>
  )
}

export type UseWithSquareTTTReturn = {
  bind: SquareTTTProps
  owner: PlayerTTT | null
  setWinner: (delay: number) => void
  reset: () => void
}

export const useWithSquareTTT = (onTurnEnd: () => void): UseWithSquareTTTReturn => {
  const { isGameOver, currentPlayer } = useTicTacToe()
  const [owner, setOwner] = useState<PlayerTTT | null>(null)
  const marker = useWithMarkerTTT(owner)

  useEffect(() => {
    if (owner) onTurnEnd()
  }, [owner])

  const setWinner = (delay: number) => {
    marker.setWinning(delay)
  }

  const reset = () => {
    marker.reset()
    setOwner(null)
  }

  const onClick = () => {
    if (isGameOver || owner) return
    setOwner(currentPlayer)
  }

  return {
    bind: {
      markerBind: marker.bind,
      onClick,
    },
    setWinner,
    owner,
    reset,
  }
}

export default SquareTTT

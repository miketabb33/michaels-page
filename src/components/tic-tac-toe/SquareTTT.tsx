import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MarkerIdTTT, PlayerTTT } from './PlayerTTT'
import { MarkerTTTProps } from './svg/MarkerSvgTTT'

const Square = styled.button<{ $isWinningSquare?: boolean }>`
  display: block;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 20rem;
  height: 20rem;
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
  setWinner: () => void
  ownerMarker?: MarkerIdTTT
}

export const useWithSquareTTT = (currentPlayer: PlayerTTT, onTurnEnd: () => void): UseWithSquareTTTReturn => {
  const WINNING_COLOR = '#D7E725'

  const [isWinning, setIsWinning] = useState(false)
  const [owner, setOwner] = useState<PlayerTTT | undefined>(undefined)

  useEffect(() => {
    onTurnEnd()
  }, [owner])

  const setWinner = () => {
    setIsWinning(true)
  }

  const onClick = () => {
    if (owner) return
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
    ownerMarker: owner?.markerID,
  }
}

export default SquareTTT

// interface SquareViewProps {
// 	boardIndex: number
// 	squareIndex: number
// 	onClick: () => void
// 	square: Square
// }

// export default class SquareView extends React.Component<SquareViewProps, {}> {
// 	size = 200
// 	playerMarkerImage = new PlayerMarkerImage
// 	squareID = 'board-' + (this.props.boardIndex + 1) + '-square-' + (this.props.squareIndex + 1)

// 	render() {
// 		return (
// 			<button
// 				className = { gameStyles.square }
// 				onClick = { this.props.onClick }
// 				id = { this.squareID }
// 			>
// 			{ this.getContents(this.props.square) }
//      	</button>
// 		)
// 	}

// 	getContents(square: Square) {
// 		const imageName = this.getSquareImageName(square)
// 		return this.playerMarkerImage.get(imageName, this.size, this.squareID)
// 	}

// 	getSquareImageName(square: Square): string {
// 		const xMarker = 'x'
// 		const oMarker = 'o'
// 		var imageName = 'clear'

// 		if (square.marker == xMarker || square.marker == oMarker) {
// 			imageName = this.getPlayerMarkerImageName(square)
// 		}

// 		return imageName
// 	}

// 	getPlayerMarkerImageName(square: Square): string {
// 		var imageName
// 		if (square.winningMarker) {
// 			imageName = 'yellow' + square.marker
// 		} else {
// 			imageName = square.marker
// 		}
// 		return imageName!
// 	}

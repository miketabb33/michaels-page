import React from 'react'
import styled from 'styled-components'
import { PlayerTTT } from './PlayerTTT'
import { MarkerTTTProps } from './svg/MarkerSvgTTT'

const Square = styled.button<{ $isWinningSquare?: boolean }>`
  display: block;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid black;
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

type IndexPathTTT = {
  board: number
  square: number
}

type SquareTTT = {
  owner?: PlayerTTT
  isWinningSquare: boolean
  indexPath: IndexPathTTT
}

const SquareViewTTT = (square: SquareTTT) => {
  const { markerProps } = useInSquareViewTTT(square)
  return (
    <Square $isWinningSquare={square.isWinningSquare} onClick={() => console.log('clicked')}>
      {square.owner?.makeComponent(markerProps)}
    </Square>
  )
}

const useInSquareViewTTT = ({ owner, isWinningSquare }: SquareTTT) => {
  const WINNING_COLOR = '#D7E725'

  if (!owner) {
    const defaultMarkerProps: MarkerTTTProps = { size: '', color: '' }
    return { markerProps: defaultMarkerProps }
  }

  const markerColor = isWinningSquare ? WINNING_COLOR : owner.color
  const markerProps: MarkerTTTProps = { size: '100%', color: markerColor }
  return { markerProps }
}

export default SquareViewTTT

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

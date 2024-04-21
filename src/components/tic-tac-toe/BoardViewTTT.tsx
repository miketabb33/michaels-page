import React, { useEffect } from 'react'
import BoardSvgTTT from './svg/BoardSvgTTT'
import styled from 'styled-components'
import SquareTTT, { SquareTTTProps, UseWithSquareTTTReturn, useWithSquareTTT } from './SquareTTT'
import { PlayerTTT, XPlayer } from './PlayerTTT'
import { XMarkerSvg } from './svg/MarkerSvgTTT'
// import SquareView from './square-view'
// import BoardImage from '../images/board-image'
// import gameStyles from '../styles/GameStyles.module.css'
// import Square from '../game/square.jsx'

const Container = styled.div`
  position: relative;
  width: 60rem;
  height: 60rem;
`

const SquareGrid = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

type BoardTTTProps = {
  squareBinds: SquareTTTProps[]
}

const BoardTTT = ({ squareBinds }: BoardTTTProps) => {
  return (
    <Container>
      <BoardSvgTTT size="100%" />
      <SquareGrid>
        {squareBinds.map((bind, i) => (
          <SquareTTT key={i} {...bind} />
        ))}
      </SquareGrid>
    </Container>
  )
}

export const useWithBoardTTT = (currentPlayer: PlayerTTT, onTurnEnd: () => void) => {
  const squares = [
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
    useWithSquareTTT(currentPlayer, onTurnEnd),
  ]

  return {
    bind: {
      squareBinds: squares.map((s) => s.bind),
    },
    squares,
  }
}

export default BoardTTT

// interface BoardViewProps {
// 	squares: Square[]
// 	boardIndex: number
// 	boardTitle: string
// 	onClick: (squareIndex: number, boardIndex: number) => void
// }

// export default class BoardView extends React.Component<BoardViewProps, {}> {
// 	boardImageSize = 500
// 	boardImage = new BoardImage

// 	renderSquare(i: number) {
// 		return (
// 			<SquareView
// 	      square = { this.props.squares[i] }
// 				boardIndex = { this.props.boardIndex }
// 				squareIndex = { i }
// 	      onClick = { ()=> this.props.onClick(i, this.props.boardIndex) }
// 	    />
// 		)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className= {gameStyles.board}>
// 					{ this.boardImageView() }
// 					{ this.boardSquares() }
// 				</div>
// 				{ this.boardLabel(this.props.boardTitle) }
// 			</div>
// 		)
// 	}

// 	boardImageView() {
// 		return (
// 			<div className= {gameStyles.boardImage}>
// 				{ this.boardImage.get(this.boardImageSize, this.props.boardIndex) }
// 			</div>
// 		)
// 	}

// 	boardSquares() {
// 		return (
// 			<div className= {gameStyles.boardSquares}>
// 				<div>
// 					{this.renderSquare(0)}
// 					{this.renderSquare(1)}
// 					{this.renderSquare(2)}
// 				</div>
// 				<div>
// 					{this.renderSquare(3)}
// 					{this.renderSquare(4)}
// 					{this.renderSquare(5)}
// 				</div>
// 				<div>
// 					{this.renderSquare(6)}
// 					{this.renderSquare(7)}
// 					{this.renderSquare(8)}
// 				</div>
// 			</div>
// 		)
// 	}

// 	boardLabel(title: string) {
// 		return (
// 			<div className={ gameStyles.boardTitle }>
// 				{ title }
// 			</div>
// 		)
// 	}
// }

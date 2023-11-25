import React from 'react'
// import Head from 'next/head'
// import GameState from '../game/game-state'
// import Board3DView from './board-3D-view'
// import Game from '../game/game'
// import TimeInputView from './time-input-view'
// import TextDisplayView from './text-display-view'
// import InfoBarView from './info-bar-view'
// import Square from '../game/square'

// interface GameViewState {
//   squares: Square[][]
//   textDisplay: string
//   currentPlayer: string
//   xRemainingTimeInHundredthsOfSeconds: number
//   oRemainingTimeInHundredthsOfSeconds: number
//   hideTimeInputView: boolean
// }

const TicTacToeBoard = () => {
  return <>Tic Tac Toe Board</>
  // game: Game
  // constructor(props: any) {
  //   super(props)
  //   this.game = new Game(
  //     (marker, time) => this.timerValueDidChange(marker, time),
  //     (winnerMarker) => this.timerDidHit0(winnerMarker)
  //   )
  //   this.state = {
  //     squares: [
  //       this.game.getSquaresForBoard(0),
  //       this.game.getSquaresForBoard(1),
  //       this.game.getSquaresForBoard(2)
  //     ],
  //     textDisplay: TextDisplayView.xFirst,
  //     currentPlayer: this.game.getCurrentPlayer(),
  //     xRemainingTimeInHundredthsOfSeconds: 1000,
  //     oRemainingTimeInHundredthsOfSeconds: 1000,
  //     hideTimeInputView: false,
  //   }
  // }
  // render() {
  //   return (
  //     <div>
  //       <Head>
  //         <link rel="preconnect" href="https://fonts.googleapis.com" />
  //         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
  //         <link href="https://fonts.googleapis.com/css2?family=Kulim+Park&display=swap" rel="stylesheet" />
  //       </Head>
  //       <InfoBarView
  //         textDisplay = { this.state.textDisplay }
  //         activePlayer = { this.state.currentPlayer }
  //         xRemainingTimeInHundredthsOfSeconds = { this.state.xRemainingTimeInHundredthsOfSeconds }
  //         oRemainingTimeInHundredthsOfSeconds = { this.state.oRemainingTimeInHundredthsOfSeconds }
  //       />
  //       <TimeInputView
  //         didChangeTime = { (newTime: number) => this.didChangeTotalTime(newTime) }
  //         hide = { this.state.hideTimeInputView }
  //       />
  //       <Board3DView
  //         squares = { this.state.squares }
  //         onClick = { (squareIndex, boardIndex) => this.didClickSquare(squareIndex, boardIndex) }
  //       />
  //     </div>
  //   )
  // }
  // didClickSquare(squareIndex: number, boardIndex: number) {
  //   let displayContent
  //   const [state, marker] = this.game.attemptToAddMove(squareIndex, boardIndex)
  //   if (state == GameState.readyForNextMove) {
  //     displayContent = TextDisplayView.turn(marker)
  //   } else if (state == GameState.winner) {
  //     displayContent = TextDisplayView.winner(marker)
  //   } else if (state == GameState.draw) {
  //     displayContent = TextDisplayView.draw
  //   } else {
  //     return
  //   }
  //   this.setState({
  //     squares: [
  //       this.game.getSquaresForBoard(0),
  //       this.game.getSquaresForBoard(1),
  //       this.game.getSquaresForBoard(2)
  //     ],
  //     textDisplay: displayContent,
  //     currentPlayer: this.game.getCurrentPlayer(),
  //     hideTimeInputView: true
  //   })
  // }
  // didChangeTotalTime(time: number) {
  //   this.game.setTimers(time)
  //   this.setState({
  //     xRemainingTimeInHundredthsOfSeconds: time,
  //     oRemainingTimeInHundredthsOfSeconds: time
  //   })
  // }
  // timerValueDidChange(marker: string, time: number) {
  //   console.log(time)
  //   if (marker == this.game.playerMarkers[0]) {
  //     this.setState({ xRemainingTimeInHundredthsOfSeconds: time })
  //   } else if (marker == this.game.playerMarkers[1]) {
  //     this.setState({ oRemainingTimeInHundredthsOfSeconds: time })
  //   }
  // }
  // timerDidHit0(winnerMarker: string) {
  //   this.game.setGameOver()
  //   this.setState({
  //     textDisplay: TextDisplayView.winner(winnerMarker)
  //   })
  // }
}

export default TicTacToeBoard

import { PlayerTTT } from './PlayerTTT'
import { UseWithSquareTTTReturn } from './SquareTTT'
import { checkForWinner } from './winnerTTT'

export const checkFor3dWinner = (squares: UseWithSquareTTTReturn[][]): PlayerTTT | null => {
  const initialPlaneWinningCombination = checkPlanesForWinner(squares)
  if (initialPlaneWinningCombination) return initialPlaneWinningCombination

  const sideBySidePlanes = getSideToSidePlanes(squares)
  const sideBySideWinningCombination = checkPlanesForWinner(sideBySidePlanes)
  if (sideBySideWinningCombination) return sideBySideWinningCombination

  const topToBottomPlanes = getTopToBottomPlanes(squares)
  const topToBottomWinningCombination = checkPlanesForWinner(topToBottomPlanes)
  if (topToBottomWinningCombination) return topToBottomWinningCombination

  const diagonalWinCombination = checkFor3DDiagonalWin(squares)
  if (diagonalWinCombination) return diagonalWinCombination

  return null
}

const checkPlanesForWinner = (squares: UseWithSquareTTTReturn[][]) => {
  for (let j = 0; j < squares.length; j++) {
    const board = squares[j]
    const winningCombination = checkForWinner(board)
    if (winningCombination) return winningCombination
  }
  return null
}

const checkFor3DDiagonalWin = (squares: UseWithSquareTTTReturn[][]): PlayerTTT | null => {
  for (let i = 0; i < diagonalWinVariations.length; i++) {
    const winVariation = diagonalWinVariations[i]
    const cache = []
    for (let j = 0; j < winVariation.length; j++) {
      const indexPath = winVariation[j]
      cache.push(squares[indexPath[1]][indexPath[0]])
    }
    if (cache[0].owner && cache[0].owner == cache[1].owner && cache[0].owner == cache[2].owner) {
      cache[0].setWinner(0)
      cache[1].setWinner(0.1)
      cache[2].setWinner(0.2)
      return cache[0].owner
    }
  }
  return null
}

const getSideToSidePlanes = (squares: UseWithSquareTTTReturn[][]): UseWithSquareTTTReturn[][] => {
  const board1Squares = squares[0]
  const board2Squares = squares[1]
  const board3Squares = squares[2]

  const sidePlane1 = [
    board3Squares[0],
    board2Squares[0],
    board1Squares[0],
    board3Squares[3],
    board2Squares[3],
    board1Squares[3],
    board3Squares[6],
    board2Squares[6],
    board1Squares[6],
  ]
  const sidePlane2 = [
    board3Squares[1],
    board2Squares[1],
    board1Squares[1],
    board3Squares[4],
    board2Squares[4],
    board1Squares[4],
    board3Squares[7],
    board2Squares[7],
    board1Squares[7],
  ]
  const sidePlane3 = [
    board3Squares[2],
    board2Squares[2],
    board1Squares[2],
    board3Squares[5],
    board2Squares[5],
    board1Squares[5],
    board3Squares[8],
    board2Squares[8],
    board1Squares[8],
  ]

  return [sidePlane1, sidePlane2, sidePlane3]
}

const getTopToBottomPlanes = (squares: UseWithSquareTTTReturn[][]): UseWithSquareTTTReturn[][] => {
  const board1Squares = squares[0]
  const board2Squares = squares[1]
  const board3Squares = squares[2]

  const topDownPlane1 = [
    board3Squares[0],
    board3Squares[1],
    board3Squares[2],
    board2Squares[0],
    board2Squares[1],
    board2Squares[2],
    board1Squares[0],
    board1Squares[1],
    board1Squares[2],
  ]
  const topDownPlane2 = [
    board3Squares[3],
    board3Squares[4],
    board3Squares[5],
    board2Squares[3],
    board2Squares[4],
    board2Squares[5],
    board1Squares[3],
    board1Squares[4],
    board1Squares[5],
  ]
  const topDownPlane3 = [
    board3Squares[6],
    board3Squares[7],
    board3Squares[8],
    board2Squares[6],
    board2Squares[7],
    board2Squares[8],
    board1Squares[6],
    board1Squares[7],
    board1Squares[8],
  ]

  return [topDownPlane1, topDownPlane2, topDownPlane3]
}

const diagonalWinVariations = [
  [
    [0, 0],
    [4, 1],
    [8, 2],
  ],
  [
    [2, 0],
    [4, 1],
    [6, 2],
  ],
  [
    [6, 0],
    [4, 1],
    [2, 2],
  ],
  [
    [8, 0],
    [4, 1],
    [0, 2],
  ],
]

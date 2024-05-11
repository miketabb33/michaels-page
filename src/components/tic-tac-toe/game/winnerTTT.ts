import { PlayerTTT } from './PlayerTTT'
import { UseWithSquareTTTReturn } from './SquareTTT'

const winningVariations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const checkForWinner = (squares: UseWithSquareTTTReturn[]): PlayerTTT | null => {
  for (let i = 0; i < winningVariations.length; i++) {
    const [a, b, c] = winningVariations[i]
    if (
      squares[a].owner?.markerID &&
      squares[a].owner?.markerID === squares[b].owner?.markerID &&
      squares[a].owner?.markerID === squares[c].owner?.markerID
    ) {
      squares[a].setWinner(0)
      squares[b].setWinner(0.1)
      squares[c].setWinner(0.2)
      return squares[a].owner
    }
  }
  return null
}

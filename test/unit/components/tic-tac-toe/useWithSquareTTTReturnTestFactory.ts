import { MarkerIdTTT, PlayerTTT } from '../../../../src/components/tic-tac-toe/PlayerTTT'
import { UseWithSquareTTTReturn } from '../../../../src/components/tic-tac-toe/SquareTTT'

export const useWithSquareTTTReturnTestFactory = (setWinner: () => void) => {
  const makeSquare = (ownerMarker: MarkerIdTTT | null): UseWithSquareTTTReturn => {
    let owner: PlayerTTT | null = null
    if (ownerMarker) {
      owner = { markerID: ownerMarker, color: '' }
    }

    return {
      bind: {
        markerBind: {
          markerSvgBind: { color: '' },
          markerId: 'X',
        },
        onClick: () => {},
      },
      owner,
      setWinner,
      reset: () => {},
    }
  }
  const makeSquares = (arr: (MarkerIdTTT | null)[]) => {
    return arr.map(makeSquare)
  }
  return { makeSquares }
}

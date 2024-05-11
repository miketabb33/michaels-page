import { PlayerTTT } from '../../../../../../src/components/tic-tac-toe/game/PlayerTTT'
import { calculateTimerUI } from '../../../../../../src/components/tic-tac-toe/game/timer-display/calculateTimerUI'

const currentPlayerColor = 'blue'
const otherPlayerColor = 'green'
const inactiveColor = '#272726'
const redColor = 'red'

const currentPlayer: PlayerTTT = {
  markerID: 'X',
  color: currentPlayerColor,
}

const otherPlayer: PlayerTTT = {
  markerID: 'O',
  color: otherPlayerColor,
}

describe('Calculate Timer UI', () => {
  describe('Calculate Border Color', () => {
    it('should calculate player border color when its the current players turn, with time left', () => {
      const { calculateBorderColor } = calculateTimerUI(currentPlayer, false)
      expect(calculateBorderColor(currentPlayer)).toEqual(currentPlayerColor)
    })

    it('should calculate red border color when its the current players turn, with no time left', () => {
      const { calculateBorderColor } = calculateTimerUI(currentPlayer, true)
      expect(calculateBorderColor(currentPlayer)).toEqual(redColor)
    })

    it('should calculate inactive border color when its the other players turn, with time left', () => {
      const { calculateBorderColor } = calculateTimerUI(currentPlayer, false)
      expect(calculateBorderColor(otherPlayer)).toEqual(inactiveColor)
    })

    it('should calculate red border color when its the other players turn, with no time left', () => {
      const { calculateBorderColor } = calculateTimerUI(currentPlayer, true)
      expect(calculateBorderColor(otherPlayer)).toEqual(redColor)
    })
  })

  describe('Get Timer Text Props', () => {
    it('should het props for player with time left', () => {
      const { getTimerTextProps } = calculateTimerUI(currentPlayer, false)
      expect(getTimerTextProps()).toEqual({ $color: currentPlayerColor, id: 'X-player-remaining-time' })
    })

    it('should het props for player with no time left', () => {
      const { getTimerTextProps } = calculateTimerUI(currentPlayer, true)
      expect(getTimerTextProps()).toEqual({ $color: redColor, id: 'X-player-remaining-time' })
    })
  })
})

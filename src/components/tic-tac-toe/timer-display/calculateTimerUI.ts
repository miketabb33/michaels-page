import { colorTokens } from '../../../styles/colorTokens'
import { PlayerTTT } from '../PlayerTTT'

const INACTIVE_BORDER_COLOR = colorTokens.gray_950
const RED_COLOR = 'red'

export const calculateTimerUI = (player: PlayerTTT, hasNoTimeLeft: boolean) => {
  const calculateBorderColor = (currentPlayer: PlayerTTT) => {
    if (hasNoTimeLeft) return RED_COLOR
    const isActive = currentPlayer === player
    return isActive ? player.color : INACTIVE_BORDER_COLOR
  }

  const getTimerTextProps = () => ({
    $color: hasNoTimeLeft ? RED_COLOR : player.color,
    id: `${player.markerID}-player-remaining-time`,
  })

  return {
    calculateBorderColor,
    getTimerTextProps,
  }
}

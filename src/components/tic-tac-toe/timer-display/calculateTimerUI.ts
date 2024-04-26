import { colorTokens } from '../../../styles/colorTokens'
import { PlayerTTT } from '../PlayerTTT'
import { MarkerSvgTTTProps } from '../svg/MarkerSvgTTT'

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

  const getMarkerProps = (): MarkerSvgTTTProps => ({
    size: '3rem',
    color: hasNoTimeLeft ? RED_COLOR : player.color,
    id: `${player.markerID}-timer-display`,
  })

  return {
    calculateBorderColor,
    getTimerTextProps,
    getMarkerProps,
  }
}

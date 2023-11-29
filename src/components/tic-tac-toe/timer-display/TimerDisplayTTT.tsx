import React from 'react'
import styled from 'styled-components'
import { PlayerTTT } from '../PlayerTTT'
import { MarkerTTTProps } from '../svg/MarkerSvgTTT'
import { formatTimerDisplay } from './formatTimerDisplay'
import { colorTokens } from '../../../styles/colorTokens'

type StyledTimerDisplayProps = {
  $borderColor: string
}

const TimerDisplay = styled.div<StyledTimerDisplayProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 0.2rem 2.2rem;
  background: ${({ theme }) => theme.staticColor.gray_850};
  border: ${({ $borderColor }) => `0.4rem solid ${$borderColor}`};
  box-shadow: ${({ theme }) => theme.shadow.blur};
  border-radius: 3rem;
`

type StyledTimerTextProps = {
  $color: string
}

const TimerText = styled.p<StyledTimerTextProps>`
  color: ${({ $color }) => $color};
  font-size: 2em;
`

type TimerDisplayTTTProps = {
  player: PlayerTTT
  isActive: boolean
  remainingTimeInHundredthsOfSeconds: number
}

const TimerDisplayTTT = (props: TimerDisplayTTTProps) => {
  const { borderColor, markerProps, timerTextProps, timeText } = useInTimerDisplayTTT(props)

  return (
    <TimerDisplay $borderColor={borderColor}>
      {props.player.makeComponent(markerProps)}
      <TimerText {...timerTextProps}>{timeText}</TimerText>
    </TimerDisplay>
  )
}

const useInTimerDisplayTTT = ({ player, isActive, remainingTimeInHundredthsOfSeconds }: TimerDisplayTTTProps) => {
  const INACTIVE_BORDER_COLOR = colorTokens.gray_950
  const RED_COLOR = 'red'

  const hasNoTimeLeft = remainingTimeInHundredthsOfSeconds <= 0

  const calculateBorderColor = () => {
    if (hasNoTimeLeft) return RED_COLOR
    return isActive ? player.color : INACTIVE_BORDER_COLOR
  }

  const timerTextProps = {
    $color: hasNoTimeLeft ? RED_COLOR : player.color,
    id: `${player.markerID}-player-remaining-time`,
  }

  const markerProps: MarkerTTTProps = {
    size: '3rem',
    color: hasNoTimeLeft ? RED_COLOR : player.color,
    id: `${player.markerID}-timer-display`,
  }

  return {
    borderColor: calculateBorderColor(),
    markerProps,
    timerTextProps,
    timeText: formatTimerDisplay(remainingTimeInHundredthsOfSeconds),
  }
}

export default TimerDisplayTTT

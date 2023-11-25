import React from 'react'
import styled from 'styled-components'
import { PlayerTTT } from '../player-ttt/PlayerTTT'
import { MarkerTTTProps } from '../player-ttt/MarkersTTT'
import { formatTimerDisplay } from './formatTimerDisplay'

type StyledTimerDisplayProps = {
  $borderColor: string
}

const TimerDisplay = styled.div<StyledTimerDisplayProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  padding: 0.2rem 2.2rem;
  background: #484848;
  border: ${({ $borderColor }) => `0.4rem solid ${$borderColor}`};
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
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
  activePlayer: PlayerTTT
  remainingTimeInHundredthsOfSeconds: number
}

const TimerDisplayTTT = (props: TimerDisplayTTTProps) => {
  const { borderColor, markerProps, timerTextProps, timeText } = useInTimerDisplayTTT(props)

  return (
    <TimerDisplay $borderColor={borderColor}>
      {props.player.component(markerProps)}
      <TimerText {...timerTextProps}>{timeText}</TimerText>
    </TimerDisplay>
  )
}

const useInTimerDisplayTTT = ({ player, activePlayer, remainingTimeInHundredthsOfSeconds }: TimerDisplayTTTProps) => {
  const INACTIVE_BORDER_COLOR = '#2d2d2d'
  const RED_COLOR = 'red'

  const hasNoTimeLeft = remainingTimeInHundredthsOfSeconds <= 0

  const calculateBorderColor = () => {
    if (hasNoTimeLeft) return RED_COLOR
    return player.markerID === activePlayer.markerID ? player.color : INACTIVE_BORDER_COLOR
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

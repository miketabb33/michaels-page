import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayerTTT } from '../PlayerTTT'
import { MarkerTTTProps } from '../svg/MarkerSvgTTT'
import { formatTimerDisplay } from './formatTimerDisplay'
import { useTicTacToe } from '../TicTacToeProvider'
import { calculateTimerUI } from './calculateTimerUI'

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
  borderColor: string
  timerTextProps: { $color: string; id: string }
  timeText: string
  markerProps: MarkerTTTProps
  player: PlayerTTT
}

const TimerDisplayTTT = ({ borderColor, timerTextProps, timeText, markerProps, player }: TimerDisplayTTTProps) => {
  return (
    <TimerDisplay $borderColor={borderColor}>
      {player.makeComponent(markerProps)}
      <TimerText {...timerTextProps}>{timeText}</TimerText>
    </TimerDisplay>
  )
}

export const DEFAULT_START_TIME_TIMED_TTT = 1000

export const useWithTimerDisplayTTT = (player: PlayerTTT, timerDidHit0: () => void) => {
  const decrementingMillisecondInterval = 5
  const [isRunningTimer, setIsRunningTimer] = useState(false)
  const [totalTime, setTotalTime] = useState(DEFAULT_START_TIME_TIMED_TTT)
  const [usedTime, setUsedTime] = useState(0)
  const remainingTime = totalTime - usedTime
  const hasNoTimeLeft = remainingTime <= 0

  useEffect(() => {
    if (isRunningTimer) {
      const timerInterval = decrementingMillisecondInterval * 10
      const interval = setInterval(updateTime, timerInterval)

      return () => clearInterval(interval)
    }
  }, [isRunningTimer])

  useEffect(() => {
    if (hasNoTimeLeft) {
      timerDidHit0()
      stopTimer()
    }
  }, [remainingTime])

  const updateTime = () => {
    setUsedTime((val) => val + decrementingMillisecondInterval)
  }

  const startTimer = () => {
    setIsRunningTimer(true)
  }

  const stopTimer = () => {
    setIsRunningTimer(false)
  }

  const setTime = (amount: number) => {
    setUsedTime(0)
    setTotalTime(amount)
  }

  const { currentPlayer } = useTicTacToe()
  const { calculateBorderColor, getMarkerProps, getTimerTextProps } = calculateTimerUI(player, hasNoTimeLeft)

  return {
    bind: {
      borderColor: calculateBorderColor(currentPlayer),
      timerTextProps: getTimerTextProps(),
      markerProps: getMarkerProps(),
      timeText: formatTimerDisplay(remainingTime),
      player,
    },
    setTime,
    startTimer,
    stopTimer,
  }
}

export default TimerDisplayTTT

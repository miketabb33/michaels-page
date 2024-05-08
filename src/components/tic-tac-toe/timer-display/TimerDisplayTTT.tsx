import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlayerTTT } from '../PlayerTTT'
import { formatTimerDisplay } from './formatTimerDisplay'
import { useTicTacToe } from '../TicTacToeProvider'
import { calculateTimerUI } from './calculateTimerUI'
import MarkerTTT, { MarkerTTTProps, useWithMarkerTTT } from '../MarkerTTT'
import { UseEffectType } from '../../../types/UseEffectType'

type StyledTimerDisplayProps = {
  $borderColor: string
}

const TimerDisplay = styled.div<StyledTimerDisplayProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 5rem;

  padding: 0.8rem 2.2rem;
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
  markerBind: MarkerTTTProps
  player: PlayerTTT
}

const TimerDisplayTTT = ({ borderColor, timerTextProps, timeText, markerBind }: TimerDisplayTTTProps) => {
  return (
    <TimerDisplay $borderColor={borderColor}>
      <MarkerTTT {...markerBind} />
      <TimerText {...timerTextProps}>{timeText}</TimerText>
    </TimerDisplay>
  )
}

export const useWithTimeDisplayTTTController = (player: PlayerTTT, timerDidHit0: () => void) => {
  const DEFAULT_START_TIME_TIMED_TTT = 1000
  const decrementingMillisecondInterval = 5

  const [isRunningTimer, setIsRunningTimer] = useState(false)
  const [totalTime, setTotalTime] = useState(DEFAULT_START_TIME_TIMED_TTT)
  const [usedTime, setUsedTime] = useState(0)
  const remainingTime = totalTime - usedTime
  const hasNoTimeLeft = remainingTime <= 0

  const marker = useWithMarkerTTT(player)
  const { currentPlayer } = useTicTacToe()
  const { calculateBorderColor, getTimerTextProps } = calculateTimerUI(player, hasNoTimeLeft)

  const timerEffect: UseEffectType = {
    effect: () => {
      if (isRunningTimer) {
        const timerInterval = decrementingMillisecondInterval * 10
        const interval = setInterval(updateTime, timerInterval)

        return () => clearInterval(interval)
      }
    },
    deps: [isRunningTimer],
  }

  const noTimeLeftEffect: UseEffectType = {
    effect: () => {
      if (hasNoTimeLeft) {
        timerDidHit0()
        stopTimer()
        marker.setRed()
      }
    },
    deps: [remainingTime],
  }

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

  const reset = () => {
    marker.reset()
    setTime(DEFAULT_START_TIME_TIMED_TTT)
  }

  return {
    bind: {
      borderColor: calculateBorderColor(currentPlayer),
      timerTextProps: getTimerTextProps(),
      markerBind: marker.bind,
      timeText: formatTimerDisplay(remainingTime),
      player,
    },
    setTime,
    startTimer,
    stopTimer,
    reset,
    updateTime,
    noTimeLeftEffect,
    timerEffect,
  }
}

export const useWithTimerDisplayTTT = (player: PlayerTTT, timerDidHit0: () => void) => {
  const { bind, setTime, startTimer, stopTimer, reset, noTimeLeftEffect, timerEffect } =
    useWithTimeDisplayTTTController(player, timerDidHit0)

  useEffect(timerEffect.effect, timerEffect.deps)
  useEffect(noTimeLeftEffect.effect, noTimeLeftEffect.deps)

  return {
    bind,
    setTime,
    startTimer,
    stopTimer,
    reset,
  }
}

export default TimerDisplayTTT

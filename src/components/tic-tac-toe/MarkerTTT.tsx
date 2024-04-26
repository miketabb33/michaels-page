import React, { useState } from 'react'
import { MarkerIdTTT, PlayerTTT } from './PlayerTTT'
import { MarkerSvgTTTProps, OMarkerSvg, XMarkerSvg } from './svg/MarkerSvgTTT'

export type MarkerTTTProps = {
  markerSvgBind: MarkerSvgTTTProps
  markerId: MarkerIdTTT
}

const MarkerTTT = ({ markerId, markerSvgBind }: MarkerTTTProps) => {
  if (markerId === 'O') return <OMarkerSvg {...markerSvgBind} />
  return <XMarkerSvg {...markerSvgBind} />
}

export const useWithMarker = (player: PlayerTTT | null) => {
  const WINNING_COLOR = '#D7E725'
  const [isWinning, setIsWinning] = useState(false)
  const [delay, setDelay] = useState(0)
  const [isRed, setIsRed] = useState(false)

  const getMarkerSvgBind = (): MarkerSvgTTTProps => {
    if (!player) return { color: '' }
    if (isRed) return { color: 'red' }
    if (isWinning) return { color: WINNING_COLOR, isAnimating: true, animationDelay: delay }
    return { color: player.color }
  }

  const reset = () => {
    setIsRed(false)
    setIsWinning(false)
  }

  const setWinning = (delay: number) => {
    setDelay(delay)
    setIsWinning(true)
  }

  return {
    bind: {
      markerId: player?.markerID || 'X',
      markerSvgBind: getMarkerSvgBind(),
    },
    setWinning,
    setRed: () => setIsRed(true),
    reset,
  }
}

export default MarkerTTT

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

  const getMarkerSvgBind = (): MarkerSvgTTTProps => {
    if (!player) return { color: '' }
    if (isWinning) return { color: WINNING_COLOR, isAnimating: true }
    return { color: player.color }
  }

  return {
    bind: {
      markerId: player?.markerID || 'X',
      markerSvgBind: getMarkerSvgBind(),
    },
    setWinning: () => setIsWinning(true),
    resetWinning: () => setIsWinning(false),
  }
}

export default MarkerTTT

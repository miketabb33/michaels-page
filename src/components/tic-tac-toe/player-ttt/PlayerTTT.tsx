import { ReactNode } from 'react'
import { MarkerTTTProps, OMarker, XMarker } from './MarkersTTT'

export type MarkerTTT = 'X' | 'O'

export type PlayerTTT = {
  markerID: MarkerTTT
  color: string
  component: (props: MarkerTTTProps) => ReactNode
}

export const XPlayer: PlayerTTT = {
  markerID: 'X',
  color: '#1FA889',
  component: XMarker,
}

export const OPlayer: PlayerTTT = {
  markerID: 'O',
  color: '#61C278',
  component: OMarker,
}

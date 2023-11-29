import { ReactNode } from 'react'
import { MarkerTTTProps, OMarkerSvg, XMarkerSvg } from './svg/MarkerSvgTTT'

export type MarkerIdTTT = 'X' | 'O'

export type PlayerTTT = {
  markerID: MarkerIdTTT
  color: string
  makeComponent: (props: MarkerTTTProps) => ReactNode
}

export const XPlayer: PlayerTTT = {
  markerID: 'X',
  color: '#1FA889',
  makeComponent: XMarkerSvg,
}

export const OPlayer: PlayerTTT = {
  markerID: 'O',
  color: '#61C278',
  makeComponent: OMarkerSvg,
}

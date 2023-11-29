import React from 'react'
import SvgTTT from './SvgTTT'

export type MarkerTTTProps = {
  color: string
  size: string
  id?: string
}

export const OMarkerSvg = ({ color, size, id }: MarkerTTTProps) => (
  <SvgTTT
    $size={size}
    id={id}
    width="131"
    height="131"
    viewBox="0 0 131 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="65.5" cy="65.5" r="58.4724" stroke={color} strokeWidth="14.0551" />
  </SvgTTT>
)

export const XMarkerSvg = ({ color, size, id }: MarkerTTTProps) => (
  <SvgTTT
    $size={size}
    id={id}
    width="131"
    height="131"
    viewBox="0 0 131 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="10.6066" width="15" height="170" rx="7.5" transform="rotate(-45 1 10.6066)" fill={color} />
    <rect
      x="121.191"
      y="0.170288"
      width="15"
      height="170"
      rx="7.5"
      transform="rotate(45 121.191 0.170288)"
      fill={color}
    />
  </SvgTTT>
)

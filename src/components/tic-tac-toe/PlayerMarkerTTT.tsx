import React from 'react'
import styled, { css } from 'styled-components'

const teal = css`
  filter: invert(0.5) sepia(1) saturate(2) hue-rotate(105deg);
`
const yellow = css`
  filter: invert(0.7) sepia(1) saturate(4) hue-rotate(13deg);
`
const red = css`
  filter: invert(0.4) sepia(1) saturate(4) hue-rotate(327deg);
`
const green = css`
  filter: invert(0.5) sepia(1) saturate(2) hue-rotate(70deg);
`

export type MarkerColor = 'teal' | 'yellow' | 'red' | 'green'
export type MarkerTTT = 'X' | 'O'

type StyledMarkerProps = {
  $color: MarkerColor
}

const Marker = styled.img<StyledMarkerProps>`
  ${({ $color }) => css`
    ${$color === 'red' && red}
    ${$color === 'teal' && teal}
    ${$color === 'yellow' && yellow}
    ${$color === 'green' && green}
  `}
`

type PlayerMarkerTTTProps = {
  marker: MarkerTTT
  color: MarkerColor
  size: number
  location: string
}

const PlayerMarkerTTT = ({ marker, color, size, location }: PlayerMarkerTTTProps) => {
  const imageID = marker + '-marker-' + location
  return (
    <Marker
      $color={color}
      src={`/images/tic-tac-toe/${marker}-marker.svg`}
      height={size}
      width={size}
      alt={imageID}
      id={imageID}
      draggable="false"
    />
  )
}
export default PlayerMarkerTTT

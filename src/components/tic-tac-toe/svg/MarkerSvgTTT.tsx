import React from 'react'
import SvgTTT from './SvgTTT'
import styled from 'styled-components'

export type MarkerSvgTTTProps = {
  color: string
  size?: string
  id?: string
  isAnimating?: boolean
}

const OMarkerContainer = styled.div<{ $isAnimating: boolean }>`
  animation: ${({ $isAnimating }) => $isAnimating && 'jiggle 2s infinite'};

  @keyframes jiggle {
    0% {
      transform: initial;
    }

    10% {
      transform: skewY(-10deg);
    }

    20% {
      transform: skewY(15deg);
    }

    30% {
      transform: initial;
    }
  }
`

export const OMarkerSvg = ({ color, size = '100%', id, isAnimating = false }: MarkerSvgTTTProps) => (
  <OMarkerContainer $isAnimating={isAnimating}>
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
  </OMarkerContainer>
)

const XMarkerContainer = styled.div<{ $isAnimating: boolean }>`
  animation: ${({ $isAnimating }) => $isAnimating && 'flash 2s infinite'};
  @keyframes flash {
    0% {
      transform: initial;
    }

    10% {
      transform: rotate(10deg);
    }

    20% {
      transform: rotate(-15deg);
    }

    30% {
      transform: initial;
    }
  }
`

export const XMarkerSvg = ({ color, size = '100%', id, isAnimating = false }: MarkerSvgTTTProps) => (
  <XMarkerContainer $isAnimating={isAnimating}>
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
  </XMarkerContainer>
)

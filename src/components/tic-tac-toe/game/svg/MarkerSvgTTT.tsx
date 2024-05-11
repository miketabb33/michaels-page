import React from 'react'
import SvgTTT from './SvgTTT'
import styled from 'styled-components'

export type MarkerSvgTTTProps = {
  color: string
  id?: string
  isAnimating?: boolean
  animationDelay?: number
}

const OMarkerContainer = styled.div<{ $isAnimating: boolean; $delay: number }>`
  width: 100%;
  height: 100%;
  animation: ${({ $isAnimating }) => $isAnimating && 'jiggle 2s infinite'};
  animation-delay: ${({ $delay }) => `${$delay}s`};

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

export const OMarkerSvg = ({ color, id, isAnimating = false, animationDelay = 0 }: MarkerSvgTTTProps) => (
  <OMarkerContainer $isAnimating={isAnimating} $delay={animationDelay}>
    <SvgTTT id={id} width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65.5" cy="65.5" r="58.4724" stroke={color} strokeWidth="14.0551" />
    </SvgTTT>
  </OMarkerContainer>
)

const XMarkerContainer = styled.div<{ $isAnimating: boolean; $delay: number }>`
  width: 100%;
  height: 100%;
  animation: ${({ $isAnimating }) => $isAnimating && 'spin 2s infinite'};
  animation-delay: ${({ $delay }) => `${$delay}s`};

  @keyframes spin {
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

export const XMarkerSvg = ({ color, id, isAnimating = false, animationDelay = 0 }: MarkerSvgTTTProps) => (
  <XMarkerContainer $isAnimating={isAnimating} $delay={animationDelay}>
    <SvgTTT id={id} width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
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

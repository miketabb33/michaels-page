import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FlipperContainer = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`

const FlipperInner = styled.div<{ shouldShowBack: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.shouldShowBack ? 'rotateY(180deg)' : 'none')};
`

const FlipperFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const FlipperBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

type FlipperProps = {
  front: ReactNode
  back: ReactNode
  shouldShowBack: boolean
}

const Flipper = ({ front, back, shouldShowBack }: FlipperProps) => {
  return (
    <FlipperContainer>
      <FlipperInner shouldShowBack={shouldShowBack}>
        <FlipperFront>{front}</FlipperFront>
        <FlipperBack>{back}</FlipperBack>
      </FlipperInner>
    </FlipperContainer>
  )
}

export default Flipper
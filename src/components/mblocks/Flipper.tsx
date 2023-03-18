import React, { ReactNode } from 'react'
import styled from 'styled-components'

const FlipperContainer = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`

const FlipperInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
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
}

const Flipper = ({ front, back }: FlipperProps) => {
  return (
    <FlipperContainer>
      <FlipperInner>
        <FlipperFront>{front}</FlipperFront>
        <FlipperBack>{back}</FlipperBack>
      </FlipperInner>
    </FlipperContainer>
  )
}

export default Flipper

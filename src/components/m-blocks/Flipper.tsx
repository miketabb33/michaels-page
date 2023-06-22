import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
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

type ExternalFlipperProps = {
  front: React.ReactNode
  back: React.ReactNode
  shouldShowBack: boolean
}

const Flipper = ({ front, back, shouldShowBack }: ExternalFlipperProps) => {
  return (
    <Container>
      <FlipperInner shouldShowBack={shouldShowBack}>
        <FlipperFront>{front}</FlipperFront>
        <FlipperBack>{back}</FlipperBack>
      </FlipperInner>
    </Container>
  )
}

type UseWithFlipperArgs = {
  front: React.ReactNode
  back: React.ReactNode
}

export const useWithFlipper = ({ front, back }: UseWithFlipperArgs) => {
  const [shouldShowBack, setShouldShowBack] = useState(false)

  const flip = () => {
    setShouldShowBack((prev) => !prev)
  }

  return {
    bind: {
      front,
      back,
      shouldShowBack,
    },
    flip,
  }
}

export default Flipper

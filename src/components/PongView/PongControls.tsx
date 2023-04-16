import React from 'react'
import GameButton from '../game-blocks/GameButton'
import styled from 'styled-components'

type PongControlsProps = {
  width: number
  leftStarted: () => void
  leftEnded: () => void
  rightStarted: () => void
  rightEnded: () => void
}

const Container = styled.div<{ width: number }>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => `${props.width}px`};
  height: 50px;
`

const PongControls = ({ width, leftStarted, leftEnded, rightStarted, rightEnded }: PongControlsProps) => {
  return (
    <Container width={width}>
      <GameButton onPressStart={leftStarted} onPressEnd={leftEnded}>
        Left
      </GameButton>
      <GameButton onPressStart={rightStarted} onPressEnd={rightEnded}>
        Right
      </GameButton>
    </Container>
  )
}

export default PongControls

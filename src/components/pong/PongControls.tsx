import React from 'react'
import GameButton from '../game-blocks/GameButton'
import styled from 'styled-components'
import { PongController } from '../../canvas-game/GameClickController'

type PongControlsProps = {
  width: number
}

const Container = styled.div<{ width: number }>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => `${props.width}px`};
  height: 75px;
`

const PongControls = ({ width }: PongControlsProps) => {
  return (
    <Container width={width}>
      <GameButton
        onPressStart={PongController.leftPressStarted}
        onPressEnd={PongController.leftPressEnded}
        label="&larr;"
      />
      <GameButton
        onPressStart={PongController.rightPressStarted}
        onPressEnd={PongController.rightPressEnded}
        label="&rarr;"
      />
    </Container>
  )
}

export default PongControls

import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { EventConfig, eventController } from '../../eventController'

const Container = styled.div`
  cursor: pointer;
  user-select: none;
  background-color: gray;
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

type GameButtonProps = {
  children: ReactNode
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({ children, onPressStart, onPressEnd }: GameButtonProps) => {
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const pressStarted = () => {
    onPressStart()
  }

  const pressEnded = () => {
    onPressEnd()
  }

  const events: EventConfig[] = [
    { name: 'mousedown', action: pressStarted },
    { name: 'mouseup', action: pressEnded },
    { name: 'mouseleave', action: pressEnded },
    { name: 'touchstart', action: pressStarted },
    { name: 'touchend', action: pressEnded },
  ]

  const { addEventListeners } = eventController({
    events,
    target: buttonRef.current,
  })

  addEventListeners()

  return <Container ref={buttonRef}>{children}</Container>
}

export default GameButton

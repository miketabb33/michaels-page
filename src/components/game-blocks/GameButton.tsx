import React, { useRef } from 'react'
import styled from 'styled-components'
import { EventConfig, eventController } from '../../eventController'

const Button = styled.div`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  cursor: pointer;
  background-color: gray;
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

type GameButtonProps = {
  label: string
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({ label, onPressStart, onPressEnd }: GameButtonProps) => {
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

  return <Button ref={buttonRef}>{label}</Button>
}

export default GameButton

import React, { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'

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

type GameButtonEvent = {
  name: 'mousedown' | 'mouseup' | 'mouseleave' | 'touchstart' | 'touchend'
  action: (e: MouseEvent | TouchEvent) => void
}

type GameButtonProps = {
  children: ReactNode
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({
  children,
  onPressStart,
  onPressEnd,
}: GameButtonProps) => {
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const pressStarted = (e: MouseEvent | TouchEvent) => {
    if (e.cancelable) e.preventDefault()
    onPressStart()
  }

  const pressEnded = (e: MouseEvent | TouchEvent) => {
    if (e.cancelable) e.preventDefault()
    onPressEnd()
  }

  const gameButtonEvents: GameButtonEvent[] = [
    { name: 'mousedown', action: pressStarted },
    { name: 'mouseup', action: pressEnded },
    { name: 'mouseleave', action: pressEnded },
    { name: 'touchstart', action: pressStarted },
    { name: 'touchend', action: pressEnded },
  ]

  const addEventListeners = () => {
    gameButtonEvents.forEach((event) => {
      buttonRef.current?.addEventListener(event.name, event.action)
    })
  }

  const removeEventListeners = () => {
    gameButtonEvents.forEach((event) => {
      buttonRef.current?.removeEventListener(event.name, event.action)
    })
  }

  useEffect(() => {
    addEventListeners()
    return () => removeEventListeners()
  }, [buttonRef])

  return <Container ref={buttonRef}>{children}</Container>
}

export default GameButton

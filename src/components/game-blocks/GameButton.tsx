import React, { useRef } from 'react'
import styled from 'styled-components'

const Button = styled.div`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  cursor: pointer;
  background-color: ${({ theme }) => theme.color.accent};
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: ${({ theme }) => theme.spacing.small};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.spacing.xLarge};
`

type GameButtonProps = {
  label: string
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({ label, onPressStart, onPressEnd }: GameButtonProps) => {
  const { buttonRef, addEventListeners } = useGameButton(onPressStart, onPressEnd)
  addEventListeners()
  return <Button ref={buttonRef}>{label}</Button>
}

export const useGameButton = (onPressStart: () => void, onPressEnd: () => void) => {
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const pressStarted = (e: Event) => {
    if (!e.cancelable) return
    e.preventDefault()
    onPressStart()
  }

  const pressEnded = () => {
    onPressEnd()
  }

  const addEventListeners = () => {
    if (!buttonRef.current) return
    buttonRef.current.addEventListener('mousedown', pressStarted)
    buttonRef.current.addEventListener('mouseup', pressEnded)
    buttonRef.current.addEventListener('mouseleave', pressEnded)
    buttonRef.current.addEventListener('touchstart', pressStarted)
    buttonRef.current.addEventListener('touchend', pressEnded)
  }

  return { buttonRef, addEventListeners }
}

export default GameButton

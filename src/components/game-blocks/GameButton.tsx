import React, { useRef } from 'react'
import styled from 'styled-components'
import { StylesSettings } from '../../styles/Styles'
import { useTheme } from '../../context/ThemeContext'

const Button = styled.div<{ themes: StylesSettings }>`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  cursor: pointer;
  background-color: ${(props) => props.themes.themeColor.accent};
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: ${(props) => props.themes.spacing.small};
  border-bottom-right-radius: ${(props) => props.themes.spacing.small};
  font-size: ${(props) => props.themes.spacing.xLarge};
`

type GameButtonProps = {
  label: string
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({ label, onPressStart, onPressEnd }: GameButtonProps) => {
  const { styles: theme } = useTheme()
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

  addEventListeners()

  return (
    <Button themes={theme} ref={buttonRef}>
      {label}
    </Button>
  )
}

export default GameButton

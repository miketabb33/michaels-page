import React, { useRef } from 'react'
import styled from 'styled-components'
import { EventConfig, eventController } from '../../eventController'
import { StylesSettings } from '../../styles/Styles'
import { useStyles } from '../../context/StylesContext'

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
`

type GameButtonProps = {
  label: string
  onPressStart: () => void
  onPressEnd: () => void
}

const GameButton = ({ label, onPressStart, onPressEnd }: GameButtonProps) => {
  const { styles: theme } = useStyles()
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

  return (
    <Button themes={theme} ref={buttonRef}>
      {label}
    </Button>
  )
}

export default GameButton

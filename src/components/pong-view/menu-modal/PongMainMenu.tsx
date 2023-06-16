import React from 'react'
import Button from '../../mblocks/Button'
import { trackEvent } from '../../../analytics'

type PongMainMenuProps = {
  clickStart: () => void
  clickHighScore: () => void
}

const PongMainMenu = ({ clickStart, clickHighScore }: PongMainMenuProps) => {
  const onStart = () => {
    clickStart()
    trackEvent('start_pong')
  }
  return (
    <>
      <h1>Welcome to Pong</h1>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={clickHighScore}>High Scores</Button>
    </>
  )
}

export default PongMainMenu

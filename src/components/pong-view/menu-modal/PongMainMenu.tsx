import React from 'react'
import Button from '../../mblocks/Button'

type PongMainMenuProps = {
  clickStart: () => void
  clickHighScore: () => void
}

const PongMainMenu = ({ clickStart, clickHighScore }: PongMainMenuProps) => (
  <>
    <h1>Welcome to Pong</h1>
    <Button onClick={clickStart}>Start</Button>
    <Button onClick={clickHighScore}>High Scores</Button>
  </>
)

export default PongMainMenu

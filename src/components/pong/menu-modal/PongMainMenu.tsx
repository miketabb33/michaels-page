import React from 'react'
import Button from '../../m-blocks/Button'
import { useAnalytics } from '../../../analytics/useAnalytics'
import H1 from '../../m-blocks/typography/H1'
import GameModal from '../../game-blocks/GameModal'

type PongMainMenuProps = {
  clickStart: () => void
  clickHighScore: () => void
}

const PongMainMenu = ({ clickStart, clickHighScore }: PongMainMenuProps) => {
  const { trackEvent } = useAnalytics()
  const onStart = () => {
    clickStart()
    trackEvent('start_pong')
  }
  return (
    <GameModal>
      <H1>Welcome to Pong!</H1>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={clickHighScore}>High Scores</Button>
    </GameModal>
  )
}

export default PongMainMenu

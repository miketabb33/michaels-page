import React from 'react'
import Button from '../../m-blocks/Button'
import { useAnalytics } from '../../../analytics/useAnalytics'
import Typography from '../../m-blocks/Typography'

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
    <>
      <Typography kind="h1">Welcome to Pong!</Typography>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={clickHighScore}>High Scores</Button>
    </>
  )
}

export default PongMainMenu

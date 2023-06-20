import React from 'react'
import Button from '../../m-blocks/Button'
import { useAnalytics } from '../../../analytics/useAnalytics'
import H1 from '../../m-blocks/typography/H1'

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
      <H1>Welcome to Pong!</H1>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={clickHighScore}>High Scores</Button>
    </>
  )
}

export default PongMainMenu

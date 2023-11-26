import React from 'react'
import TimerDisplayTTT from './timer-display/TimerDisplayTTT'
import { OPlayer, XPlayer } from './player-ttt/PlayerTTT'
import AnnouncementTTT, { announcementTextTTT } from './AnnouncementTTT'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.staticColor.gray_300};
  border-bottom: 0.2rem solid ${({ theme }) => theme.staticColor.gray_850};
  box-shadow: ${({ theme }) => theme.shadow.crisp};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`

// const activePlayer = XPlayer
const activePlayer = OPlayer

// interface InfoBarViewProps {
//   activePlayer: string
//   textDisplay: string
//   xRemainingTimeInHundredthsOfSeconds: number
//   oRemainingTimeInHundredthsOfSeconds: number
// }

const InfoBarTTT = () => {
  return (
    <Container>
      <TimerDisplayTTT player={XPlayer} activePlayer={activePlayer} remainingTimeInHundredthsOfSeconds={1} />
      <AnnouncementTTT announcement={announcementTextTTT.first(XPlayer.markerID)} />
      <TimerDisplayTTT player={OPlayer} activePlayer={activePlayer} remainingTimeInHundredthsOfSeconds={300} />
    </Container>
  )
}

export default InfoBarTTT

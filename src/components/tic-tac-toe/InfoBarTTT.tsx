import React from 'react'
import TimerDisplayTTT from './timer-display/TimerDisplayTTT'
import { PlayerTTT } from './PlayerTTT'
import AnnouncementTTT from './AnnouncementTTT'
import styled, { css } from 'styled-components'
import { tabLandAndUp } from '../../styles/Responsive'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.staticColor.gray_850};
  border-top: 0.1rem solid ${({ theme }) => theme.staticColor.gray_850};

  ${tabLandAndUp(css`
    border-top: none;
  `)}

  box-shadow: ${({ theme }) => theme.shadow.crisp};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`

type InfoBarTTTProps = {
  activePlayer: PlayerTTT
  player1: PlayerTTT
  player2: PlayerTTT
  announcement: string
  player1RemainingTimeInHundredthsOfSeconds: number
  player2RemainingTimeInHundredthsOfSeconds: number
}

const isActivePlayer = (player: PlayerTTT, activePlayer: PlayerTTT) => player.markerID === activePlayer.markerID

const InfoBarTTT = ({
  activePlayer,
  player1,
  player2,
  announcement,
  player1RemainingTimeInHundredthsOfSeconds,
  player2RemainingTimeInHundredthsOfSeconds,
}: InfoBarTTTProps) => {
  return (
    <Container>
      {/* <TimerDisplayTTT
        player={player1}
        isActive={isActivePlayer(player1, activePlayer)}
        remainingTimeInHundredthsOfSeconds={player1RemainingTimeInHundredthsOfSeconds}
      /> */}
      <AnnouncementTTT announcement={announcement} />
      {/* <TimerDisplayTTT
        player={player2}
        isActive={isActivePlayer(player2, activePlayer)}
        remainingTimeInHundredthsOfSeconds={player2RemainingTimeInHundredthsOfSeconds}
      /> */}
    </Container>
  )
}

export default InfoBarTTT

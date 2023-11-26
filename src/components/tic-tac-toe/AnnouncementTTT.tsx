import React from 'react'
import styled from 'styled-components'
import { MarkerTTT } from './player-ttt/PlayerTTT'

const Announcement = styled.p`
  font-size: 4rem;
  color: ${({ theme }) => theme.staticColor.gray_850};
`

type AnnouncementTTTProps = {
  announcement: string
}

export const announcementTextTTT = {
  first: (marker: MarkerTTT) => `${marker} Goes First`,
  draw: 'Draw',
  turn: (marker: MarkerTTT) => `${marker}'s Turn`,
  winner: (marker: MarkerTTT) => `${marker} is the Winner!`,
}

const AnnouncementTTT = ({ announcement }: AnnouncementTTTProps) => {
  return <Announcement id={'text-display-view'}>{announcement}</Announcement>
}

export default AnnouncementTTT

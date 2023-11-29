import React from 'react'
import styled from 'styled-components'
import { MarkerIdTTT } from './PlayerTTT'

const Announcement = styled.p`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.text};
`

type AnnouncementTTTProps = {
  announcement: string
}

export const announcementTextTTT = {
  first: (marker: MarkerIdTTT) => `${marker} Goes First`,
  draw: 'Draw',
  turn: (marker: MarkerIdTTT) => `${marker}'s Turn`,
  winner: (marker: MarkerIdTTT) => `${marker} is the Winner!`,
}

const AnnouncementTTT = ({ announcement }: AnnouncementTTTProps) => {
  return <Announcement id={'text-display-view'}>{announcement}</Announcement>
}

export default AnnouncementTTT

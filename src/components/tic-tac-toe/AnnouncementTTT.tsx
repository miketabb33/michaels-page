import React from 'react'
import styled, { css } from 'styled-components'
import { MarkerIdTTT } from './PlayerTTT'
import { tabLandAndUp } from '../../styles/Responsive'

const Announcement = styled.p`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.text};
  text-align: center;

  grid-row: 1/2;
  grid-column: 1/3;

  ${tabLandAndUp(css`
    grid-row: auto;
    grid-column: auto;
  `)}
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

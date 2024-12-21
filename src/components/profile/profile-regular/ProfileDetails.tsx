import React from 'react'
import styled from 'styled-components'
import H1 from '../../m-blocks/typography/H1'
import H4 from '../../m-blocks/typography/H4'
import { MichaelTabb } from '../Profile'

const DetailsWell = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

const ProfileDetails = () => {
  return (
    <DetailsWell>
      <H1>{MichaelTabb.name}</H1>
      <H4>{MichaelTabb.title}</H4>
      <H4>{MichaelTabb.email}</H4>
    </DetailsWell>
  )
}
export default ProfileDetails

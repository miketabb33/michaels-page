import React from 'react'
import styled from 'styled-components'
import { MichaelTabb } from '../Profile'

const Name = styled.span`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
`

const Title = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
  letter-spacing: 0.01em;
`

const ProfileDetails = () => {
  return (
    <>
      <Name>{MichaelTabb.name}</Name>
      <Title>{MichaelTabb.title}</Title>
    </>
  )
}
export default ProfileDetails

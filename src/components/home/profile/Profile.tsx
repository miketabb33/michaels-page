import React from 'react'
import styled from 'styled-components'
import Image from '../../m-blocks/Image'
import SocialMediaLinks from './SocialProfileLinks'
import ProfileDetails from './ProfileDetails'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
`

const PortraitImage = styled(Image).attrs({ imageName: 'portrait' })`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.accent};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`

const Profile = () => {
  return (
    <Container>
      <PortraitImage />
      <Content>
        <ProfileDetails />
        <SocialMediaLinks />
      </Content>
    </Container>
  )
}

export default Profile

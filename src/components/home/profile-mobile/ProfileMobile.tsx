import React from 'react'
import styled from 'styled-components'
import ProfileMobileTop from './ProfileMobileTop'
import ProfileMobileIconLinks from './ProfileMobileIconLinks'
import ProfileMobileTechStack from './ProfileMobileTechStack'

const Container = styled.aside`
  padding-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`

const ProfileMobile = () => {
  return (
    <Container>
      <ProfileMobileTop />
      <ProfileMobileTechStack />
      <ProfileMobileIconLinks />
    </Container>
  )
}
export default ProfileMobile

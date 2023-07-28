import React from 'react'
import styled from 'styled-components'
import ProfileMobileTop from './ProfileMobileTop'
import ProfileMobileSocialMedia from './ProfileMobileSocialMedia'
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
      <ProfileMobileSocialMedia />
    </Container>
  )
}
export default ProfileMobile

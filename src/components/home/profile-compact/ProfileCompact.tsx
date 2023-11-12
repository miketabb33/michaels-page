import React from 'react'
import styled from 'styled-components'
import ProfileCompactTop from './ProfileCompactTop'
import ProfileCompactIconLinks from './ProfileCompactIconLinks'
import ProfileCompactTechStack from './ProfileCompactTechStack'

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`

const ProfileCompact = () => {
  return (
    <Container>
      <ProfileCompactTop />
      <ProfileCompactTechStack />
      <ProfileCompactIconLinks />
    </Container>
  )
}
export default ProfileCompact

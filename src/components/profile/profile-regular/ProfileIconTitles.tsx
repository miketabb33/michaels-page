import React from 'react'
import ProfileIconTitle from './ProfileIconTitle'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`

const ProfileIconTitles = () => {
  return (
    <Container>
      <ProfileIconTitle
        title="LinkedIn"
        iconName="linkedin"
        href="https://www.linkedin.com/in/michael-tabb-24b34488/"
      />
      <ProfileIconTitle title="Works At Humaniz" iconName="humaniz" href="https://humaniz.io/" />
      <ProfileIconTitle title="Github" iconName="github" href="https://github.com/miketabb33" />
      <ProfileIconTitle title="This Website" iconName="github" href="https://github.com/miketabb33/michaels-page" />
      <ProfileIconTitle title="Greater Boston Area, MA" iconName="pin" />
    </Container>
  )
}

export default ProfileIconTitles

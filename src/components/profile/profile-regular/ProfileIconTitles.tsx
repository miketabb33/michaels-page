import React from 'react'
import ProfileIconTitle from './ProfileIconTitle'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
`

const ProfileIconTitles = () => {
  return (
    <Container>
      <ProfileIconTitle
        title="LinkedIn"
        iconName="linkedin"
        href="https://www.linkedin.com/in/michael-tabb-24b34488/"
      />
      <ProfileIconTitle title="Humaniz" iconName="humaniz" href="https://humaniz.io/" />
      <ProfileIconTitle title="Github" iconName="github" href="https://github.com/miketabb33" />
      <ProfileIconTitle title="Boston, MA" iconName="pin" />
    </Container>
  )
}

export default ProfileIconTitles

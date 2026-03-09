import React from 'react'
import styled from 'styled-components'
import Image from '../../m-blocks/Image'
import ProfileIconTitles from './ProfileIconTitles'
import ProfileDetails from './ProfileDetails'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`

const PhotoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`

const PortraitWrap = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px rgba(167, 139, 250, 0.5), 0 0 16px rgba(124, 58, 237, 0.35);
`

const PortraitImage = styled(Image).attrs({ imageName: 'portrait' })`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const PhotoMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const Profile = () => {
  return (
    <Container>
      <PhotoRow>
        <PortraitWrap>
          <PortraitImage />
        </PortraitWrap>
        <PhotoMeta>
          <ProfileDetails />
        </PhotoMeta>
      </PhotoRow>
      <ProfileIconTitles />
    </Container>
  )
}

export default Profile

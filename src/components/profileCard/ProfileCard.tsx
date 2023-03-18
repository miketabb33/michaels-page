import React, { useState } from 'react'
import styled from 'styled-components'
import Flipper from '../mblocks/Flipper'
import ProfileCardBack from './ProfileCardBack'
import ProfileCardFront from './ProfileCardFront'

const ProfileCardContainer = styled.div`
  width: 75%;
  max-width: 500px;
  aspect-ratio: 1.5;
`

const ProfileCard = () => {
  const [isBackShowing, setIsBackShowing] = useState(false)

  const flipCard = () => {
    setIsBackShowing(!isBackShowing)
  }

  return (
    <ProfileCardContainer>
      <Flipper
        front={<ProfileCardFront onRotateIconClick={flipCard} />}
        back={<ProfileCardBack onRotateIconClick={flipCard} />}
        shouldShowBack={isBackShowing}
      ></Flipper>
    </ProfileCardContainer>
  )
}

export default ProfileCard

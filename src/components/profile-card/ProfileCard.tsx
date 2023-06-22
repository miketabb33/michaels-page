import React from 'react'
import styled from 'styled-components'
import Flipper, { useWithFlipper } from '../m-blocks/Flipper'
import ProfileCardBack from './ProfileCardBack'
import ProfileCardFront from './ProfileCardFront'
import { Breakpoint, MQ } from '../../Breakpoint'
import { useAnalytics } from '../../analytics/useAnalytics'

const Container = styled.div`
  width: 95%;
  max-width: 500px;
  aspect-ratio: 1.5;
  color: ${({ theme }) => theme.staticColor.gray_950};

  @media ${MQ(Breakpoint.tablet)} {
    width: 75%;
  }
`

const ProfileCard = () => {
  const { trackEvent } = useAnalytics()

  const flipCard = () => {
    flipper.flip()
    trackEvent('flipped_profile_card')
  }

  const flipper = useWithFlipper({
    front: <ProfileCardFront onRotateIconClick={flipCard} />,
    back: <ProfileCardBack onRotateIconClick={flipCard} />,
  })

  return (
    <Container>
      <Flipper {...flipper.bind} />
    </Container>
  )
}

export default ProfileCard

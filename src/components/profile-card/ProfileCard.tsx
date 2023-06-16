import React, { useState } from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Flipper from '../m-blocks/Flipper'
import ProfileCardBack from './ProfileCardBack'
import ProfileCardFront from './ProfileCardFront'
import { Breakpoint, MQ } from '../../Breakpoint'
import { useAnalytics } from '../../analytics/useAnalytics'

const Container = styled.div<{ styles: StylesSettings }>`
  width: 95%;
  max-width: 500px;
  aspect-ratio: 1.5;
  color: ${(props) => props.styles.staticColor.black};

  @media ${MQ(Breakpoint.tablet)} {
    width: 75%;
  }
`

const ProfileCard = () => {
  const { styles } = useStyles()
  const [isBackShowing, setIsBackShowing] = useState(false)
  const { trackEvent } = useAnalytics()

  const flipCard = () => {
    setIsBackShowing(!isBackShowing)
    trackEvent('flipped_profile_card')
  }

  return (
    <Container styles={styles}>
      <Flipper
        front={<ProfileCardFront onRotateIconClick={flipCard} />}
        back={<ProfileCardBack onRotateIconClick={flipCard} />}
        shouldShowBack={isBackShowing}
      ></Flipper>
    </Container>
  )
}

export default ProfileCard

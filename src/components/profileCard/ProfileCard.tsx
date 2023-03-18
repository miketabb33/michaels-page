import React, { useState } from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Flipper from '../mblocks/Flipper'
import ProfileCardBack from './ProfileCardBack'
import ProfileCardFront from './ProfileCardFront'

const ProfileCardContainer = styled.div<{ styles: StylesSettings }>`
  width: 75%;
  max-width: 500px;
  aspect-ratio: 1.4;
  color: ${(props) => props.styles.staticColor.black};
`

const ProfileCard = () => {
  const { styles } = useStyles()
  const [isBackShowing, setIsBackShowing] = useState(false)

  const flipCard = () => {
    setIsBackShowing(!isBackShowing)
  }

  return (
    <ProfileCardContainer styles={styles}>
      <Flipper
        front={<ProfileCardFront onRotateIconClick={flipCard} />}
        back={<ProfileCardBack onRotateIconClick={flipCard} />}
        shouldShowBack={isBackShowing}
      ></Flipper>
    </ProfileCardContainer>
  )
}

export default ProfileCard

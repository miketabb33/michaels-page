import React from 'react'
import styled from 'styled-components'
import Card from '../m-blocks/Card'
import IconButton from '../m-blocks/IconButton'
import Spacer from '../m-blocks/Spacer'
import Typography from '../m-blocks/Typography'
import { IconButtonWrapper, ProfileCardFrontProps } from './ProfileCardFront'

const CardBackContent = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.large};
`

const Scroller = styled.div`
  height: 100%;
  overflow-y: auto;
`

type ProfileCardBackProps = ProfileCardFrontProps

const ProfileCardBack = ({ onRotateIconClick }: ProfileCardBackProps) => {
  return (
    <Card>
      <IconButtonWrapper>
        <IconButton iconName="rotate" onClick={onRotateIconClick} />
      </IconButtonWrapper>

      <CardBackContent>
        <Scroller>
          <Typography kind="p">
            I began my studies with computer programming in August 2017 to build a worthwhile and inspiring career. I
            started with web development using JavaScript (front-end) and then moved into Ruby on Rails. In March of
            2019, I began studying IOS development with Swift.
          </Typography>
          <Spacer size="medium" />
          <Typography kind="p">
            Since then, I have been continuing to grow as a developer and choose to always be learning. I am committed
            to the pursuit of writing high quality and well-tested software in a world with changing project
            requirements.
          </Typography>
        </Scroller>
      </CardBackContent>
    </Card>
  )
}

export default ProfileCardBack

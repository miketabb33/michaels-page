import React from 'react'
import styled from 'styled-components'
import Card from '../m-blocks/Card'
import { ProfileCardFrontProps } from './ProfileCardFront'
import P from '../m-blocks/typography/P'
import RotateCardButton from './RotateCardButton'

const CardBackContent = styled.div`
  height: 100%;
  padding: 4rem ${({ theme }) => theme.spacing.large};
`

const Scroller = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

type ProfileCardBackProps = ProfileCardFrontProps

const ProfileCardBack = ({ onRotateIconClick }: ProfileCardBackProps) => {
  return (
    <Card>
      <RotateCardButton onRotateIconClick={onRotateIconClick} />
      <CardBackContent>
        <Scroller>
          <P>
            I began my studies with computer programming in August 2017 to build a worthwhile and inspiring career. I
            started with web development using JavaScript (front-end) and then moved into Ruby on Rails. In March of
            2019, I began studying IOS development with Swift.
          </P>
          <P>
            Since then, I have been continuing to grow as a developer and choose to always be learning. I am committed
            to the pursuit of writing high quality and well-tested software in a world with changing project
            requirements.
          </P>
        </Scroller>
      </CardBackContent>
    </Card>
  )
}

export default ProfileCardBack

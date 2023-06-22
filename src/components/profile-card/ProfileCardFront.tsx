import React from 'react'
import styled from 'styled-components'
import Card from '../m-blocks/Card'
import P from '../m-blocks/typography/P'
import SocialMediaRow from './SocialMediaRow'
import ProfileFrontTopRow from './ProfileFrontTopRow'
import RotateCardButton from './RotateCardButton'

const CardFrontContent = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  display: grid;
  grid-template-rows: 60%;
`

const TechStackRow = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

export type ProfileCardFrontProps = {
  onRotateIconClick: () => void
}

const ProfileCardFront = ({ onRotateIconClick }: ProfileCardFrontProps) => {
  return (
    <Card>
      <RotateCardButton onRotateIconClick={onRotateIconClick} />
      <CardFrontContent>
        <ProfileFrontTopRow />
        <TechStackRow>
          <P>React • Typescript • Swift • Xcode</P>
        </TechStackRow>
        <SocialMediaRow />
      </CardFrontContent>
    </Card>
  )
}
export default ProfileCardFront

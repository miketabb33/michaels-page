import React from 'react'
import styled from 'styled-components'
import Card from '../m-blocks/Card'
import Icon from '../m-blocks/Icon'
import IconButton from '../m-blocks/IconButton'
import H1 from '../m-blocks/typography/H1'
import P from '../m-blocks/typography/P'

export const IconButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xSmall};
  right: ${({ theme }) => theme.spacing.xSmall};
`

const CardFrontContent = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  display: grid;
  grid-template-rows: 60%;
`

const TopRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const Portrait = styled.img`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.accent};
`

const TextWell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const SocialMediaRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: right;
  align-items: flex-end;
`

const TechStackRow = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const IconLink = styled.a`
  width: ${({ theme }) => theme.spacing.xLarge};
  height: ${({ theme }) => theme.spacing.xLarge};
  padding: ${({ theme }) => theme.spacing.small};
`

export type ProfileCardFrontProps = {
  onRotateIconClick: () => void
}

const ProfileCardFront = ({ onRotateIconClick }: ProfileCardFrontProps) => {
  return (
    <Card>
      <IconButtonWrapper>
        <IconButton iconName="rotate" onClick={onRotateIconClick} />
      </IconButtonWrapper>
      <CardFrontContent>
        <TopRow>
          <Portrait src="./images/portrait.jpeg" />
          <TextWell>
            <H1 ignoreDarkMode>Michael Tabb</H1>
            <P>Software Engineer</P>
            <P>miketabb33@gmail.com</P>
          </TextWell>
        </TopRow>

        <TechStackRow>
          <P>React • Typescript • Swift • Xcode</P>
        </TechStackRow>
        <SocialMediaRow>
          <IconLink href="https://www.linkedin.com/in/michael-tabb-24b34488/" target="_blank" rel="noreferrer">
            <Icon iconName="linkedin" />
          </IconLink>
          <IconLink href="https://github.com/miketabb33" target="_blank" rel="noreferrer">
            <Icon iconName="github" />
          </IconLink>
        </SocialMediaRow>
      </CardFrontContent>
    </Card>
  )
}
export default ProfileCardFront

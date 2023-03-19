import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Card from '../mblocks/Card'
import Icon from '../mblocks/Icon'
import IconButton from '../mblocks/IconButton'
import Typography from '../mblocks/Typography'

export const IconButtonWrapper = styled.div<{ styles: StylesSettings }>`
  position: absolute;
  top: ${(props) => props.styles.spacing.xSmall};
  right: ${(props) => props.styles.spacing.xSmall};
`

const CardFrontContent = styled.div<{ styles: StylesSettings }>`
  height: 100%;
  padding: ${(props) => props.styles.spacing.medium};
  display: grid;
  grid-template-rows: 60%;
`

const TopRow = styled.div<{ styles: StylesSettings }>`
  display: flex;
  gap: ${(props) => props.styles.spacing.medium};
`

const Portrait = styled.img<{ styles: StylesSettings }>`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid ${(props) => props.styles.themeColor.accent};
`

const TextWell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const SocialMediaRow = styled.div<{ styles: StylesSettings }>`
  display: flex;
  gap: ${(props) => props.styles.spacing.small};
  justify-content: right;
  align-items: flex-end;
`

const TechStackRow = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const IconLink = styled.a<{ styles: StylesSettings }>`
  width: ${(props) => props.styles.spacing.xLarge};
  height: ${(props) => props.styles.spacing.xLarge};
  padding: ${(props) => props.styles.spacing.small};
`

export type ProfileCardFrontProps = {
  onRotateIconClick: () => void
}

const ProfileCardFront = ({ onRotateIconClick }: ProfileCardFrontProps) => {
  const { styles } = useStyles()
  return (
    <Card>
      <IconButtonWrapper styles={styles}>
        <IconButton iconName="rotate" onClick={onRotateIconClick} />
      </IconButtonWrapper>
      <CardFrontContent styles={styles}>
        <TopRow styles={styles}>
          <Portrait src="./images/portrait.jpeg" styles={styles} />
          <TextWell>
            <Typography kind="h1">Michael Tabb</Typography>
            <Typography kind="p">Software Engineer</Typography>
            <Typography kind="p">miketabb33@gmail.com</Typography>
          </TextWell>
        </TopRow>

        <TechStackRow>
          <Typography kind="p">React • Typescript • Swift • Xcode</Typography>
        </TechStackRow>
        <SocialMediaRow styles={styles}>
          <IconLink
            href="https://www.linkedin.com/in/michael-tabb-24b34488/"
            target="_blank"
            rel="noreferrer"
            styles={styles}
          >
            <Icon iconName="linkedin" />
          </IconLink>
          <IconLink
            href="https://github.com/miketabb33"
            target="_blank"
            rel="noreferrer"
            styles={styles}
          >
            <Icon iconName="github" />
          </IconLink>
        </SocialMediaRow>
      </CardFrontContent>
    </Card>
  )
}
export default ProfileCardFront

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
  max-width: none;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid ${(props) => props.styles.themeColor.accent};
`

const TextWell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BottomRow = styled.div<{ styles: StylesSettings }>`
  display: flex;
  gap: ${(props) => props.styles.spacing.medium};
  justify-content: right;
  align-items: flex-end;
`

const IconLink = styled.a<{ styles: StylesSettings }>`
  width: ${(props) => props.styles.spacing.medium};
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
        <BottomRow styles={styles}>
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
        </BottomRow>
      </CardFrontContent>
    </Card>
  )
}
export default ProfileCardFront

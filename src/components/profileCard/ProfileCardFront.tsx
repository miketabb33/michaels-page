import React from 'react'
import styled from 'styled-components'
import { Breakpoint, MQ } from '../../Breakpoint'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Card from '../mblocks/Card'
import IconButton from '../mblocks/IconButton'
import Spacer from '../mblocks/Spacer'
import Typography from '../mblocks/Typography'

export const IconButtonWrapper = styled.div<{ styles: StylesSettings }>`
  position: absolute;
  top: ${(props) => props.styles.spacing.xSmall};
  right: ${(props) => props.styles.spacing.xSmall};
`

const CardFrontContent = styled.div<{ styles: StylesSettings }>`
  padding: ${(props) => props.styles.spacing.medium};
`

const Portrait = styled.img`
  width: 100px;
  border-radius: 50%;

  @media ${MQ(Breakpoint.tablet)} {
    width: 200px;
  }
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
        <Portrait src="./images/portrait.jpeg" />
        <Spacer size="medium" />
        <Typography kind="h3">Michael Tabb</Typography>
        <Typography kind="p">Software Engineer</Typography>
      </CardFrontContent>
    </Card>
  )
}
export default ProfileCardFront

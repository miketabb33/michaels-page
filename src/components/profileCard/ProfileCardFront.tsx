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
      <Portrait src="./images/portrait.jpeg" />
      <Spacer size="medium" />
      <Typography variation="h3" color="black">
        Michael Tabb
      </Typography>
      <Typography variation="p" color="black">
        Software Engineer
      </Typography>
    </Card>
  )
}
export default ProfileCardFront

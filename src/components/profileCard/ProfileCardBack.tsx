import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Card from '../mblocks/Card'
import IconButton from '../mblocks/IconButton'
import Spacer from '../mblocks/Spacer'
import Typography from '../mblocks/Typography'
import { IconButtonWrapper, ProfileCardFrontProps } from './ProfileCardFront'

const CardBackContent = styled.div<{ styles: StylesSettings }>`
  height: 100%;
  padding: ${(props) => props.styles.spacing.large};
`

const Scroller = styled.div`
  height: 100%;
  overflow-y: auto;
`

type ProfileCardBackProps = ProfileCardFrontProps

const ProfileCardBack = ({ onRotateIconClick }: ProfileCardBackProps) => {
  const { styles } = useStyles()

  return (
    <Card>
      <IconButtonWrapper styles={styles}>
        <IconButton iconName="rotate" onClick={onRotateIconClick} />
      </IconButtonWrapper>

      <CardBackContent styles={styles}>
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

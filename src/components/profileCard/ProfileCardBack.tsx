import React from 'react'
import { useStyles } from '../../context/StylesContext'
import Card from '../mblocks/Card'
import IconButton from '../mblocks/IconButton'
import Typography from '../mblocks/Typography'
import { IconButtonWrapper, ProfileCardFrontProps } from './ProfileCardFront'

type ProfileCardBackProps = ProfileCardFrontProps

const ProfileCardBack = ({ onRotateIconClick }: ProfileCardBackProps) => {
  const { styles } = useStyles()
  return (
    <Card>
      <IconButtonWrapper styles={styles}>
        <IconButton iconName="rotate" onClick={onRotateIconClick} />
      </IconButtonWrapper>
      <Typography variation="p" color="black">
        I began my studies with computer programming in August 2017 to build a
        worthwhile and inspiring career. I started with web development using
        JavaScript (front-end) and then moved into Ruby on Rails. In March of
        2019, I began studying IOS development with Swift. Since then, I have
        been continuing to grow as a developer and choose to always be learning.
        I am committed to the pursuit of writing high quality and well-tested
        software in a world with changing project requirements.
      </Typography>
    </Card>
  )
}

export default ProfileCardBack

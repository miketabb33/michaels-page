import React from 'react'
import styled from 'styled-components'
import { Breakpoint, MQ } from '../Breakpoint'
import Card from './mblocks/Card'
import Flipper from './mblocks/Flipper'
import Spacer from './mblocks/Spacer'

const ProfileCardContainer = styled.div`
  width: 75%;
  max-width: 500px;
  aspect-ratio: 1.5;
`

const Portrait = styled.img`
  width: 100px;
  border-radius: 50%;

  @media ${MQ(Breakpoint.tablet)} {
    width: 200px;
  }
`

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <Flipper front={FrontSide} back={BackSide}></Flipper>
    </ProfileCardContainer>
  )
}

const FrontSide = (
  <Card>
    <Portrait src="./images/portrait.jpeg" />
    <Spacer size="medium" />
    <h3>Michael Tabb</h3>
    <p>Software Engineer</p>
  </Card>
)

const BackSide = (
  <Card>
    <p>
      I began my studies with computer programming in August 2017 to build a
      worthwhile and inspiring career. I started with web development using
      JavaScript (front-end) and then moved into Ruby on Rails. In March of
      2019, I began studying IOS development with Swift. Since then, I have been
      continuing to grow as a developer and choose to always be learning. I am
      committed to the pursuit of writing high quality and well-tested software
      in a world with changing project requirements.
    </p>
  </Card>
)

export default ProfileCard

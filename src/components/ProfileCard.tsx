import React from 'react'
import styled from 'styled-components'
import { Breakpoint, MQ } from '../context/BreakpointContext'
import Card from './mblocks/Card'
import Spacer from './mblocks/Spacer'

const ProfileCardContainer = styled.div`
  max-width: 75%;
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
      <Card>
        <Portrait src="./images/portrait.jpeg" />
        <Spacer size="medium" />
        <h3>Michael Tabb</h3>
        <p>Software Engineer</p>
        <p>
          I began my studies with computer programming in August 2017 to build a
          worthwhile and inspiring career. I started with web development using
          JavaScript (front-end) and then moved into Ruby on Rails. In March of
          2019, I began studying IOS development with Swift. Since then, I have
          been continuing to grow as a developer and choose to always be
          learning. I am committed to the pursuit of writing high quality and
          well-tested software in a world with changing project requirements.
        </p>
        <Spacer size="medium" />
      </Card>
    </ProfileCardContainer>
  )
}

export default ProfileCard

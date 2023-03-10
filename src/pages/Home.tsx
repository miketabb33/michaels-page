import React from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import Button from '../components/mblocks/Button'
import Spacer from '../components/mblocks/Spacer'
import { useStyles } from '../context/StylesContext'

const Screen = styled.div`
  height: 100vh;
`
const CardWrapper = styled.div`
  width: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Portrait = styled.img`
  border-radius: 50%;
`

const Home = () => {
  const { toggleTheme } = useStyles()

  return (
    <NavLayout>
      <Screen>
        <CardWrapper>
          <Portrait src="./images/portrait.jpeg" />
          <Spacer size="medium" />
          <h3>Hi Shanna</h3>
          <p>Im Michael Tabb</p>
          <p>I love you! Have a great day!</p>
          <Spacer size="medium" />
          <Button onClick={toggleTheme}>New Look?</Button>
        </CardWrapper>
      </Screen>
    </NavLayout>
  )
}

export default Home

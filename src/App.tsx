import React from 'react'
import { Card } from '@mui/material'
import styled from '@emotion/styled'

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
const CardContent = styled.div`
  padding: 2rem;
`

const App = () => {
  return (
    <Screen>
      <CardWrapper>
        <Card>
          <CardContent>
            <h3>Hello,</h3>
            <p>Im Michael Tabb.</p>
            <p>How are you today?</p>
          </CardContent>
        </Card>
      </CardWrapper>
    </Screen>
  )
}

export default App

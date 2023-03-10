import React from 'react'
import Card from '@mui/material/Card'
import styled from '@emotion/styled'
import { $spacing, $fontSize } from './styles/static'

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
  padding: ${$spacing.medium};
  font-size: ${$fontSize.normal};
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

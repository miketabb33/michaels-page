import React from 'react'
import styled from 'styled-components'

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

const App = () => {
  return (
    <Screen>
      <CardWrapper>
        <h3>Hello,</h3>
        <p>Im Michael Tabb.</p>
        <p>How are you today?</p>
      </CardWrapper>
    </Screen>
  )
}

export default App

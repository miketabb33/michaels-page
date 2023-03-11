import React from 'react'
import styled from 'styled-components'
import Button from './components/mblocks/Button'
import { useTheme } from './context/ThemeContext'
import GlobalStyle from './GlobalStyles'

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
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <GlobalStyle theme={theme} />
      <Screen>
        <CardWrapper>
          <h3>Hi Shanna</h3>
          <p>Im Michael Tabb</p>
          <p>I love you! Have a great day!</p>
          <Button onClick={toggleTheme}>change theme</Button>
        </CardWrapper>
      </Screen>
    </>
  )
}

export default App

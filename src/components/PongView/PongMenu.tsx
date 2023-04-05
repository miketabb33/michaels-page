import React from 'react'
import styled from 'styled-components'
import Button from '../mblocks/Button'

const Container = styled.div`
  background-color: blue;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`

type PongMenuProps = {
  onStart: () => void
}

const PongMenu = ({ onStart }: PongMenuProps) => {
  return (
    <Container>
      <h1>Welcome to Pong</h1>
      <Button onClick={onStart}>Start</Button>
    </Container>
  )
}

export default PongMenu

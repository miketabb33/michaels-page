import styled from 'styled-components'
import Spinner from './Spinner'
import React from 'react'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpinnerView = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export default SpinnerView

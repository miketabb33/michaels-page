import React from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import ProfileCard from '../components/profile-card/ProfileCard'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <NavLayout>
      <Container>
        <ProfileCard />
      </Container>
    </NavLayout>
  )
}

export default Home

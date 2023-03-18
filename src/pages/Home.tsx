import React from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import ProfileCard from '../components/ProfileCard'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Home = () => {
  return (
    <NavLayout>
      <HomeContainer>
        <ProfileCard />
      </HomeContainer>
    </NavLayout>
  )
}

export default Home

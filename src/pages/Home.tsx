import React from 'react'
import styled from 'styled-components'
import NavLayout from '../components/layouts/NavLayout'
import ProfileCard from '../components/profile-card/ProfileCard'
import { usePage } from './usePage'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  usePage({ title: 'Home' })
  return (
    <NavLayout>
      <Container>
        <ProfileCard />
      </Container>
    </NavLayout>
  )
}

export default HomePage

import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import styled from 'styled-components'
import { usePage } from './usePage'
import H2 from '../components/m-blocks/typography/H2'
import H1 from '../components/m-blocks/typography/H1'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NotFoundPage = () => {
  usePage({ title: 'Pong', description: 'The page you are looking for can not be found' })
  return (
    <NavLayout>
      <Container>
        <H1>404</H1>
        <H2>Page Not Found</H2>
      </Container>
    </NavLayout>
  )
}

export default NotFoundPage

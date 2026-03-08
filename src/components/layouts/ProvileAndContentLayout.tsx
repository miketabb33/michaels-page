import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'
import React from 'react'

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 5rem 3rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`

const ProfileAndContentLayout = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export default ProfileAndContentLayout

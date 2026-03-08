import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 1.4rem;
  overflow: hidden;
  transition: border-color 0.2s;
`

const ContentContainer = styled.div`
  padding: 2rem 2.2rem;
`

const Card = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export const CardContent = ({ children }: ChildrenProp) => {
  return <ContentContainer>{children}</ContentContainer>
}

export default Card

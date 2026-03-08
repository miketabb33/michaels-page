import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 1.4rem;
  overflow: hidden;
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

import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.splash};
  box-shadow: ${({ theme }) => theme.shadow.blur};
  border-radius: ${({ theme }) => theme.spacing.medium};
  overflow: hidden;
`

const ContentContainer = styled.div`
  padding: 2rem;
`

const Card = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export const CardContent = ({ children }: ChildrenProp) => {
  return <ContentContainer>{children}</ContentContainer>
}

export default Card

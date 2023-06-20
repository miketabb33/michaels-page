import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.staticColor.gray_50};
  box-shadow: ${({ theme }) => theme.shadow.blur};
  border-radius: ${({ theme }) => theme.spacing.medium};
`

const Card = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export default Card

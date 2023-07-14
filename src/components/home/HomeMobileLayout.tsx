import React from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import styled from 'styled-components'
import { Breakpoint, MQ } from '../../Breakpoint'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.small};
  padding-bottom: 6rem;

  @media ${MQ(Breakpoint.tablet)} {
    display: none;
  }
`

const HomeMobileLayout = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export default HomeMobileLayout

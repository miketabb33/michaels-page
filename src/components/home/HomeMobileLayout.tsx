import React from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import styled from 'styled-components'
import { tabletAndUp } from '../../Breakpoint'
import { PageLayout } from '../m-blocks/Layout'

const Container = styled(PageLayout)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  padding-bottom: 6rem;

  @media ${tabletAndUp} {
    display: none;
  }
`

const HomeMobileLayout = ({ children }: ChildrenProp) => {
  return <Container>{children}</Container>
}

export default HomeMobileLayout
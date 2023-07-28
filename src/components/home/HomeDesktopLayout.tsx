import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { PageContainer } from '../m-blocks/Layout'
import { tabletAndUp } from '../../Breakpoint'

const Container = styled(PageContainer)`
  display: none;
  height: 100%;

  @media ${tabletAndUp} {
    display: flex;
  }
`

const ViewPort = styled.div`
  padding-top: ${({ theme }) => theme.spacing.large};
  padding-bottom: 6rem;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xLarge};
`
const Aside = styled.aside`
  width: 45rem;
`

type HomeLayoutProps = {
  centerSection: ReactNode
  aside: ReactNode
}

const HomeDesktopLayout = ({ centerSection, aside }: HomeLayoutProps) => {
  return (
    <Container>
      <ViewPort>{centerSection}</ViewPort>
      <Aside>{aside}</Aside>
    </Container>
  )
}

export default HomeDesktopLayout

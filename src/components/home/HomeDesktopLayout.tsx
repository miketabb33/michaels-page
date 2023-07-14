import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Breakpoint, MQ } from '../../Breakpoint'

const Container = styled.div`
  display: none;
  height: 100%;

  @media ${MQ(Breakpoint.tablet)} {
    display: flex;
  }
`

const ViewPort = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xLarge} ${({ theme }) => theme.spacing.large};
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

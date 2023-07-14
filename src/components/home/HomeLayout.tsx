import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  height: 100%;
`

const CenterContainer = styled.div`
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

const HomeLayout = ({ centerSection, aside }: HomeLayoutProps) => {
  return (
    <Flex>
      <CenterContainer>{centerSection}</CenterContainer>
      <Aside>{aside}</Aside>
    </Flex>
  )
}

export default HomeLayout

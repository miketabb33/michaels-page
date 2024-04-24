import React, { ReactNode } from 'react'
import styled from 'styled-components'
import InfoBarTTT from './InfoBarTTT'
import BackButtonTTT from './BackButtonTTT'

const ViewPort = styled.div`
  position: relative;
`

const Container = styled.div`
  padding: 1.5rem;
  padding-top: 3rem;
`

type LayoutTTT = {
  InfoBarContent: ReactNode
  children: ReactNode
}

const LayoutTTT = ({ InfoBarContent, children }: LayoutTTT) => {
  return (
    <>
      <InfoBarTTT>{InfoBarContent}</InfoBarTTT>
      <ViewPort>
        <BackButtonTTT />
        <Container>{children}</Container>
      </ViewPort>
    </>
  )
}

export default LayoutTTT

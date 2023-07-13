import React from 'react'
import styled from 'styled-components'
import Image from '../m-blocks/Image'

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`

const PortraitImage = styled(Image).attrs({ imageName: 'portrait' })`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.accent};
`

const ProfileInfo = () => {
  return (
    <Container>
      <PortraitImage />
    </Container>
  )
}

export default ProfileInfo

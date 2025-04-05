import React from 'react'
import styled from 'styled-components'
import Image from '../../m-blocks/Image'
import { MichaelTabb } from '../Profile'
import { H1, H4 } from '../../m-blocks/typography'
import TextLink from '../../m-blocks/TextLink'

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const Portrait = styled(Image)`
  height: 15rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.accent};
  flex: 0 0;
`

const TextWell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const ProfileCompactTop = () => (
  <Container>
    <Portrait imageName="portrait" />
    <TextWell>
      <H1 ignoreDarkMode>{MichaelTabb.name}</H1>
      <H4>{MichaelTabb.title}</H4>
      <H4>
        <TextLink href={`mailto:${MichaelTabb.email}`} openInNewWindow={false}>
          {MichaelTabb.email}
        </TextLink>
      </H4>
    </TextWell>
  </Container>
)

export default ProfileCompactTop

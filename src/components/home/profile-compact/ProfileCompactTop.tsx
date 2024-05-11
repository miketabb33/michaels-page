import React from 'react'
import styled from 'styled-components'
import Image from '../../m-blocks/Image'
import H1 from '../../m-blocks/typography/H1'
import H3 from '../../m-blocks/typography/H3'

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const Portrait = styled(Image)`
  height: 15rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.accent};
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
      <H1 ignoreDarkMode>Michael Tabb</H1>
      <H3>Software Engineer</H3>
      <H3>miketabb33@gmail.com</H3>
    </TextWell>
  </Container>
)

export default ProfileCompactTop

import React from 'react'
import styled from 'styled-components'
import H1 from '../m-blocks/typography/H1'
import P from '../m-blocks/typography/P'

const TopRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const Portrait = styled.img`
  height: 100%;
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

const ProfileFrontTopRow = () => (
  <TopRow>
    <Portrait src="./images/portrait.jpeg" />
    <TextWell>
      <H1 ignoreDarkMode>Michael Tabb</H1>
      <P>Software Engineer</P>
      <P>miketabb33@gmail.com</P>
    </TextWell>
  </TopRow>
)

export default ProfileFrontTopRow

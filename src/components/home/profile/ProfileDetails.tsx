import React from 'react'
import styled from 'styled-components'
import H1 from '../../m-blocks/typography/H1'
import H3 from '../../m-blocks/typography/H3'

const DetailsWell = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

const ProfileDetails = () => {
  return (
    <DetailsWell>
      <H1>Michael Tabb</H1>
      <H3>Software Engineer</H3>
      <H3>miketabb33@gmail.com</H3>
    </DetailsWell>
  )
}
export default ProfileDetails

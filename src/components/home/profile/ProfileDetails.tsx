import React from 'react'
import styled from 'styled-components'
import H1 from '../../m-blocks/typography/H1'
import H4 from '../../m-blocks/typography/H4'

const DetailsWell = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

const ProfileDetails = () => {
  return (
    <DetailsWell>
      <H1>Michael Tabb</H1>
      <H4>Software Engineer</H4>
      <H4>miketabb33@gmail.com</H4>
    </DetailsWell>
  )
}
export default ProfileDetails

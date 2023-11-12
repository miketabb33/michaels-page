import React from 'react'
import styled from 'styled-components'
import Icon from '../../m-blocks/Icon'

const IconLink = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  width: 6rem;
  height: 6rem;
  padding: ${({ theme }) => theme.spacing.small};
`

const Row = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const ProfileCompactIconLinks = () => (
  <Row>
    <IconLink href="https://www.linkedin.com/in/michael-tabb-24b34488/">
      <Icon iconName="linkedin" />
    </IconLink>
    <IconLink href="https://github.com/miketabb33">
      <Icon iconName="github" />
    </IconLink>

    <IconLink href="https://www.pragmint.com/">
      <Icon iconName="pragmint" />
    </IconLink>
  </Row>
)

export default ProfileCompactIconLinks

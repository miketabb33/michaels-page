import React from 'react'
import styled from 'styled-components'
import Icon from '../../m-blocks/Icon'

const IconLink = styled.a`
  width: 6rem;
  height: 6rem;
  padding: ${({ theme }) => theme.spacing.small};
`

const SocialMediaRowElement = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`

const ProfileMobileSocialMedia = () => (
  <SocialMediaRowElement>
    <IconLink href="https://www.linkedin.com/in/michael-tabb-24b34488/" target="_blank" rel="noreferrer">
      <Icon iconName="linkedin" />
    </IconLink>
    <IconLink href="https://github.com/miketabb33" target="_blank" rel="noreferrer">
      <Icon iconName="github" />
    </IconLink>
  </SocialMediaRowElement>
)

export default ProfileMobileSocialMedia

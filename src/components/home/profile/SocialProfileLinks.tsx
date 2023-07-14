import React from 'react'
import SocialProfileLink from './SocialProfileLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`

const SocialMediaLinks = () => {
  return (
    <Container>
      <SocialProfileLink
        title="LinkedIn"
        iconName="linkedin"
        href="https://www.linkedin.com/in/michael-tabb-24b34488/"
      />
      <SocialProfileLink title="Github" iconName="github" href="https://github.com/miketabb33" />
      <SocialProfileLink title="This Website" iconName="github" href="https://github.com/miketabb33/michaels-page" />
    </Container>
  )
}

export default SocialMediaLinks

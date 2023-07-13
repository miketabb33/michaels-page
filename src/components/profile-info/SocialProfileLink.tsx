import styled from 'styled-components'
import Icon, { IconName } from '../m-blocks/Icon'
import P from '../m-blocks/typography/P'
import React from 'react'

const SocialIcon = styled(Icon)`
  width: 2rem;
  aspect-ratio: 1;
`

const Anchor = styled.a`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xSmall};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

type SocialMediaProfileLinkProps = {
  title: string
  iconName: IconName
  href: string
}

const SocialProfileLink = ({ title, iconName, href }: SocialMediaProfileLinkProps) => {
  return (
    <Anchor href={href} target="_blank" rel="noreferrer">
      <SocialIcon iconName={iconName} />
      <P>{title}</P>
    </Anchor>
  )
}

export default SocialProfileLink

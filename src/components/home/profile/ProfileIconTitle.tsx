import styled, { css } from 'styled-components'
import Icon, { IconName } from '../../m-blocks/Icon'
import P from '../../m-blocks/typography/P'
import React from 'react'

const SocialIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
`

const IconTitle = css`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xSmall};
  color: ${({ theme }) => theme.color.text};
`

const NonAnchor = styled.div`
  ${IconTitle}
`

const Anchor = styled.a`
  ${IconTitle}
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

type ProfileIconTitleProps = {
  title: string
  iconName: IconName
  href?: string
}

const ProfileIconTitle = ({ title, iconName, href }: ProfileIconTitleProps) => {
  const isLink = !!href

  return (
    <>
      {isLink ? (
        <Anchor href={href} target="_blank" rel="noreferrer">
          <SocialIcon iconName={iconName} />
          <P>{title}</P>
        </Anchor>
      ) : (
        <NonAnchor>
          <SocialIcon iconName={iconName} />
          <P>{title}</P>
        </NonAnchor>
      )}
    </>
  )
}

export default ProfileIconTitle

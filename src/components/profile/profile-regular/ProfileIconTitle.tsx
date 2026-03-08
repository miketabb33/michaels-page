import styled, { css } from 'styled-components'
import Icon, { IconName } from '../../m-blocks/Icon'
import React from 'react'

const SocialIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity 0.15s;
`

const baseStyle = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 0.6rem;
  border-radius: 0.4rem;
  text-decoration: none;
  transition: background-color 0.15s;
`

const Label = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.15s;
`

const NonAnchor = styled.div`
  ${baseStyle}
`

const Anchor = styled.a`
  ${baseStyle}

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);

    ${Label} {
      color: rgba(255, 255, 255, 0.8);
    }

    ${SocialIcon} {
      opacity: 0.9;
    }
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
          <Label>{title}</Label>
        </Anchor>
      ) : (
        <NonAnchor>
          <SocialIcon iconName={iconName} />
          <Label>{title}</Label>
        </NonAnchor>
      )}
    </>
  )
}

export default ProfileIconTitle

import styled, { css } from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'
import { hideOnAndUp, tabLandAndUp } from '../../styles/Responsive'
import React from 'react'

import { PageLayout } from '../m-blocks/Layout'
import ProfileCompact from '../profile/profile-compact/ProfileCompact'

const Container = styled(PageLayout)`
  display: flex;

  ${tabLandAndUp(css`
    height: 100%;
  `)}
`

const ViewPort = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.large};
    padding-top: 3rem;
    padding-bottom: 6rem;
    width: 100%;

    ${tabLandAndUp(css`
      overflow-y: auto;
    `)}
  `}
`

const ProfileMobile = styled.div`
  ${hideOnAndUp('tablet-landscape')}
`

const ProfileAndContentLayout = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <ViewPort>
        <ProfileMobile>
          <ProfileCompact />
        </ProfileMobile>
        {children}
      </ViewPort>
    </Container>
  )
}

export default ProfileAndContentLayout

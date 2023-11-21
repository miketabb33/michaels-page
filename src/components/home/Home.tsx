import React from 'react'
import Profile from './profile/Profile'
import { IndustryKnowledgeHome, TechnicalExpertiseHome, WhatIDoHome, WhatIValueHome } from './HomeSections'
import { useRequest } from '../../network/useRequest'
import { ArticleMeta, fetchArticleManifest } from '../../network/articleClient'
import styled, { css } from 'styled-components'
import { PageLayout } from '../m-blocks/Layout'
import { hideOnAndUp, showOnAndUp, tabLandAndUp } from '../../styles/Responsive'
import ProfileCompact from './profile-compact/ProfileCompact'
import ArticlesList from '../article/ArticlesList'

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

    ${tabLandAndUp(css`
      overflow-y: auto;
    `)}
  `}
`

const ProfileMobile = styled.div`
  ${hideOnAndUp('tablet-landscape')}
`

const Aside = styled.aside`
  max-width: 27rem;
  min-width: 27rem;
  ${showOnAndUp('tablet-landscape')}
`

const Home = () => {
  const { data: articles } = useRequest<ArticleMeta[]>({ request: fetchArticleManifest })
  return (
    <Container>
      <ViewPort>
        <ProfileMobile>
          <ProfileCompact />
        </ProfileMobile>
        {articles && <ArticlesList articles={articles} />}
        <WhatIDoHome />
        <IndustryKnowledgeHome />
        <TechnicalExpertiseHome />
        <WhatIValueHome />
      </ViewPort>
      <Aside>
        <Profile />
      </Aside>
    </Container>
  )
}

export default Home

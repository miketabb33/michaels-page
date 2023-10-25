import React from 'react'
import Profile from './profile/Profile'
import HomeDesktopLayout from './HomeDesktopLayout'
import { IndustryKnowledgeHome, TechnicalExpertiseHome, WhatIDoHome, WhatIValueHome } from './HomeSections'
import ProfileMobile from './profile-mobile/ProfileMobile'
import HomeMobileLayout from './HomeMobileLayout'
import { useRequest } from '../../network/useRequest'
import { Article, fetchArticleManifest } from '../../network/articleClient'
import ArticleCard from '../article/ArticleCard'
import { ENV } from '../../config/environments/currentEnv'

const Home = () => {
  const { data: articles } = useRequest<Article[]>({ request: fetchArticleManifest })
  return (
    <>
      <HomeDesktopLayout
        centerSection={
          <>
            {ENV.id === 'develop' && articles && <ArticleCard article={articles[0]} />}
            <WhatIDoHome />
            <IndustryKnowledgeHome />
            <TechnicalExpertiseHome />
            <WhatIValueHome />
          </>
        }
        aside={<Profile />}
      />
      <HomeMobileLayout>
        <ProfileMobile />
        <WhatIDoHome />
        <IndustryKnowledgeHome />
        <TechnicalExpertiseHome />
        <WhatIValueHome />
      </HomeMobileLayout>
    </>
  )
}

export default Home

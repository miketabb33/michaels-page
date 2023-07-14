import React from 'react'
import Profile from './profile/Profile'
import HomeDesktopLayout from './HomeDesktopLayout'
import { IndustryKnowledgeHome, TechnicalExpertiseHome, WhatIDoHome, WhatIValueHome } from './HomeSections'
import ProfileMobile from './profile-mobile/ProfileMobile'
import HomeMobileLayout from './HomeMobileLayout'

const Home = () => {
  return (
    <>
      <HomeDesktopLayout
        centerSection={
          <>
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

import React from 'react'
import Profile from './profile/Profile'
import HomeLayout from './HomeLayout'
import { IndustryKnowledgeHome, TechnicalExpertiseHome, WhatIDoHome, WhatIValueHome } from './HomeSections'

const Home = () => {
  return (
    <HomeLayout
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
  )
}

export default Home

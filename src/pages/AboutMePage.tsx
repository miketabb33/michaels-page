import React from 'react'
import {
  IndustryKnowledgeHome,
  TechnicalExpertiseHome,
  WhatIDoHome,
  WhatIValueHome,
} from '../components/home/HomeSections'
import NavLayout from '../components/layouts/NavLayout'
import ProfileAndContentLayout from '../components/layouts/ProvileAndContentLayout'

const AboutMePage = () => {
  return (
    <NavLayout>
      <ProfileAndContentLayout>
        <WhatIDoHome />
        <IndustryKnowledgeHome />
        <TechnicalExpertiseHome />
        <WhatIValueHome />
      </ProfileAndContentLayout>
    </NavLayout>
  )
}

export default AboutMePage

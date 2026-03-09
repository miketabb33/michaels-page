import React from 'react'
import {
  IndustryKnowledgeHome,
  TechnicalExpertiseHome,
  WhatIDoHome,
  WhatIValueHome,
} from '../components/home/HomeSections'
import NavLayout from '../components/layouts/NavLayout'
import ProfileAndContentLayout from '../components/layouts/ProvileAndContentLayout'
import { usePage } from './usePage'

const AboutMePage = () => {
  usePage({
    title: 'About',
    description:
      'Senior Software Engineer based in Boston, MA. I build software with AI-driven iteration across Rails, Vue, React, TypeScript, C#, and Swift.',
  })
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

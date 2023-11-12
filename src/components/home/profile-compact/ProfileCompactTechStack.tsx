import React from 'react'
import styled from 'styled-components'
import H3 from '../../m-blocks/typography/H3'

const TechStackRow = styled.div`
  display: flex;
  align-items: center;
`

const ProfileCompactTechStack = () => {
  return (
    <TechStackRow>
      <H3>React • Typescript • Swift • Xcode</H3>
    </TechStackRow>
  )
}

export default ProfileCompactTechStack

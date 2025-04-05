import React from 'react'
import styled from 'styled-components'
import H3 from '../../m-blocks/typography/H3'

const TechStackRow = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

const ProfileCompactTechStack = () => {
  return (
    <TechStackRow>
      <H3>React • Vue • Typescript • Node • Ruby on Rails • C# • Swift • Xcode • Polyglot</H3>
    </TechStackRow>
  )
}

export default ProfileCompactTechStack

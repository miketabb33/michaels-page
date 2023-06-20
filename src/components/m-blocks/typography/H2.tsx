import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'

const H2Element = styled.h2`
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
`

const H2 = ({ children }: ChildrenProp) => {
  return <H2Element>{children}</H2Element>
}

export default H2

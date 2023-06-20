import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'

const H3Element = styled.h3`
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
`

const H3 = ({ children }: ChildrenProp) => {
  return <H3Element>{children}</H3Element>
}

export default H3

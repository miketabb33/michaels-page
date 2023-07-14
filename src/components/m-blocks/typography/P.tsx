import React from 'react'
import { ChildrenProp } from '../../../types/ChildrenProp'
import styled from 'styled-components'

const PElement = styled.p`
  color: ${({ theme }) => (theme.color.id === 'light' ? theme.staticColor.blue_950 : theme.staticColor.blue_50)};
`
const P = ({ children }: ChildrenProp) => {
  return <PElement>{children}</PElement>
}

export default P

import styled from 'styled-components'
import { ChildrenProp } from '../../../types/ChildrenProp'
import React from 'react'

const BoldStyle = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.staticColor.blue_600};
`

const Bold = ({ children }: ChildrenProp) => <BoldStyle>{children}</BoldStyle>

export default Bold

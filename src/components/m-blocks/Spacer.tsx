import React from 'react'
import styled from 'styled-components'
import { ThemeSpacing } from '../../styles/ThemeSpacing'

const Container = styled.div<{ size: Size }>`
  height: ${(props) => calculateSpace(props.size, props.theme.spacing)};
  width: ${(props) => calculateSpace(props.size, props.theme.spacing)};
`

const calculateSpace = (size: Size, themeSpacing: ThemeSpacing) => {
  if (size === 'medium') return themeSpacing.medium
  return themeSpacing.small
}

type Size = 'small' | 'medium'

type SpacerProps = {
  size: Size
}

const Spacer = ({ size }: SpacerProps) => {
  return <Container size={size} />
}

export default Spacer

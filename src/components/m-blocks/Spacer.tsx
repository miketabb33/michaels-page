import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/ThemeContext'

const Container = styled.div<{ space: string }>`
  height: ${(props) => props.space};
  width: ${(props) => props.space};
`

type SpacerProps = {
  size: 'small' | 'medium'
}

const Spacer = ({ size }: SpacerProps) => {
  const { styles: theme } = useTheme()
  const calculateSpace = () => {
    if (size === 'medium') return theme.spacing.medium
    return theme.spacing.small
  }
  return <Container space={calculateSpace()} />
}

export default Spacer

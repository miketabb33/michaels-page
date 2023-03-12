import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'

const SpacerStyles = styled.div<{ space: string }>`
  height: ${(props) => props.space};
  width: ${(props) => props.space};
`

type SpacerProps = {
  size: 'small' | 'medium'
}

const Spacer = ({ size }: SpacerProps) => {
  const { styles: theme } = useStyles()
  const calculateSpace = () => {
    if (size === 'medium') return theme.spacing.medium
    return theme.spacing.small
  }
  return <SpacerStyles space={calculateSpace()} />
}

export default Spacer

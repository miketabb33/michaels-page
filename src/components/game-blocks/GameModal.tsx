import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const GameModalStyle = styled.div`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  background-color: ${({ theme }) => theme.color.splash};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
  padding: ${({ theme }) => theme.spacing.xLarge};
  border-radius: ${({ theme }) => theme.spacing.small};
  outline: ${({ theme }) => theme.color.primaryDark} ${({ theme }) => theme.spacing.small} solid;
  box-shadow: ${({ theme }) => theme.shadow.strong};
`

const GameModal = ({ children }: ChildrenProp) => {
  return <GameModalStyle>{children}</GameModalStyle>
}

export default GameModal

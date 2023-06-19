import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'

const GameModalStyle = styled.div<{ themes: StylesSettings }>`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  background-color: ${(props) => props.themes.themeColor.splash};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.themes.spacing.xSmall};
  padding: ${(props) => props.themes.spacing.xLarge};
  border-radius: ${(props) => props.themes.spacing.small};
  outline: ${(props) => props.themes.themeColor.primaryDark} ${(props) => props.themes.spacing.small} solid;
  box-shadow: 0 1rem 5rem black;
`

const GameModal = ({ children }: ChildrenProp) => {
  const { styles: theme } = useStyles()
  return <GameModalStyle themes={theme}>{children}</GameModalStyle>
}

export default GameModal

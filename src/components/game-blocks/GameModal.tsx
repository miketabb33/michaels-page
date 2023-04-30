import React from 'react'
import styled from 'styled-components'
import { ChildrenProp } from '../../types/ChildrenProp'

const GameModalStyle = styled.div`
  background-color: gray;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`

const GameModal = ({ children }: ChildrenProp) => {
  return <GameModalStyle>{children}</GameModalStyle>
}

export default GameModal

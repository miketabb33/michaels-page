import React, { useEffect } from 'react'
import styled from 'styled-components'
import PongControls from './PongControls'
import { getPongSoloConfig } from '../../canvas-game/pong/config/soloConfig'
import H1 from '../m-blocks/typography/H1'
import PongMenu from './menu-modal/PongMenu'
import { usePongBoard } from './usePongBoard'

const PongCanvas = styled.canvas`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  border: 1px solid ${({ theme }) => theme.color.accent};
  background-color: ${({ theme }) => theme.staticColor.gray_950};
`

const PongBoard = () => {
  const { shouldShowMenu, score, pongBoardDeInit, pongMenuBind, pongCanvasBind, pongControlsBind } = usePongBoard(
    getPongSoloConfig()
  )
  useEffect(() => {
    return pongBoardDeInit
  }, [])

  return (
    <>
      <H1>Score: {score}</H1>
      <PongCanvas {...pongCanvasBind} />
      <PongControls {...pongControlsBind} />
      {shouldShowMenu && <PongMenu {...pongMenuBind} />}
    </>
  )
}

export default PongBoard

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PongControls from './PongControls'
import { removeListenersArray } from '../../canvas-game/removeListenersArray'
import { usePong } from '../../canvas-game/pong/usePong'
import { getPongSoloConfig } from '../../canvas-game/pong/config/soloConfig'
import H1 from '../m-blocks/typography/H1'
import PongMenu from './menu-modal/PongMenu'
import { PongConfig } from '../../canvas-game/pong/config/pongConfigs'

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
  const { shouldShowMenu, score, pongMenuBind, pongCanvasBind, pongControlsBind } = usePongBoard(getPongSoloConfig())
  return (
    <>
      <H1>Score: {score}</H1>
      <PongCanvas {...pongCanvasBind} />
      <PongControls {...pongControlsBind} />
      {shouldShowMenu && <PongMenu {...pongMenuBind} />}
    </>
  )
}

export const usePongBoard = (initialConfig: PongConfig) => {
  const [pongConfig] = useState(initialConfig)

  useEffect(() => {
    return () => {
      removeListenersArray.forEach((r) => r())
    }
  }, [])

  const {
    gameState,
    startGame,
    score,
    resetGame,
    canvasRef,
    canvasWidth,
    setIsPressingLeftButton,
    setIsPressingRightButton,
  } = usePong({ pongConfig })

  const shouldShowMenu = gameState === 'menu' || gameState === 'lost' || gameState === 'won'

  return {
    shouldShowMenu,
    score,
    pongMenuBind: {
      gameState,
      score,
      startGame,
      resetGame,
    },
    pongCanvasBind: {
      ref: canvasRef,
      id: 'PongCanvas',
    },
    pongControlsBind: {
      width: canvasWidth,
      leftStarted: () => setIsPressingLeftButton(true),
      leftEnded: () => setIsPressingLeftButton(false),
      rightStarted: () => setIsPressingRightButton(true),
      rightEnded: () => setIsPressingRightButton(false),
    },
  }
}

export default PongBoard

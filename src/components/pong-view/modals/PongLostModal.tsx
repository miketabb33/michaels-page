import React from 'react'
import GameModal from '../../game-blocks/GameModal'
import Button from '../../mblocks/Button'

type PongLostModalProps = {
  onMainMenu: () => void
  score: number
}

const PongLostModal = ({ onMainMenu, score }: PongLostModalProps) => {
  return (
    <GameModal>
      <h1>Game Over</h1>
      <h3>You have a score {score}</h3>
      <Button onClick={onMainMenu}>Main Menu</Button>
    </GameModal>
  )
}

export default PongLostModal

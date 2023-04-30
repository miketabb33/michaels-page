import React from 'react'
import GameModal from '../../game-blocks/GameModal'
import Button from '../../mblocks/Button'

type PongLostModalProps = {
  onMainMenu: () => void
}

const PongLostModal = ({ onMainMenu }: PongLostModalProps) => {
  return (
    <GameModal>
      <h1>You Lost</h1>
      <Button onClick={onMainMenu}>Main Menu</Button>
    </GameModal>
  )
}

export default PongLostModal

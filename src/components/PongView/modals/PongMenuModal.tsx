import React from 'react'
import Button from '../../mblocks/Button'
import GameModal from '../../game-blocks/GameModal'

type PongMenuModalProps = {
  onStart: () => void
}

const PongMenuModal = ({ onStart }: PongMenuModalProps) => {
  return (
    <GameModal>
      <h1>Welcome to Pong</h1>
      <Button onClick={onStart}>Start</Button>
    </GameModal>
  )
}

export default PongMenuModal

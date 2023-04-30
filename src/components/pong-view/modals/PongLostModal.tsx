import React, { useState } from 'react'
import GameModal from '../../game-blocks/GameModal'
import Button from '../../mblocks/Button'
import { saveScore } from '../../../firebase/pongDB'

type PongLostModalProps = {
  onMainMenu: () => void
  score: number
}

const PongLostModal = ({ onMainMenu, score }: PongLostModalProps) => {
  const [name, setName] = useState('')

  const onSaveClick = () => {
    saveScore({ name, score }).then().catch(console.error)
    onMainMenu()
  }

  return (
    <GameModal>
      <h1>Game Over</h1>
      <h3>You have a score {score}</h3>
      <input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Button onClick={onSaveClick}>Save Score</Button>
      <Button onClick={onMainMenu}>Main Menu</Button>
    </GameModal>
  )
}

export default PongLostModal

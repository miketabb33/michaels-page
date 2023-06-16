import React, { useState } from 'react'
import Button from '../m-blocks/Button'
import { saveScore } from '../../networking/pong/scores'
import GameModal from '../game-blocks/GameModal'
import Input from '../m-blocks/Input'

type PongGameOverModalProps = {
  clickMainMenu: () => void
  score: number
}

const PongGameOverModal = ({ clickMainMenu: onMainMenu, score }: PongGameOverModalProps) => {
  const [name, setName] = useState('')

  const onSaveClick = () => {
    saveScore({ name, score }).catch(console.error)
    onMainMenu()
  }

  return (
    <GameModal>
      <h1>Game Over</h1>
      <h3>You have a score {score}</h3>
      <Input
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

export default PongGameOverModal

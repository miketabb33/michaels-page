import React, { useState } from 'react'
import Button from '../m-blocks/Button'
import { saveScore } from '../../networking/pong/scores'
import GameModal from '../game-blocks/GameModal'
import Input from '../m-blocks/Input'
import { random } from '../../random'

type PongGameOverModalProps = {
  clickMainMenu: () => void
  score: number
}

const PongGameOverModal = ({ clickMainMenu: onMainMenu, score }: PongGameOverModalProps) => {
  const [name, setName] = useState('')

  const onSaveClick = () => {
    saveScore({ name: safeName(), score }).catch(console.error)
    onMainMenu()
  }

  const safeName = (): string => {
    if (!name) return backupNames[random(backupNames.length - 1)] || 'banana'
    return name
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

const backupNames = [
  'shaquille.oatmeal',
  'hanging_with_my_gnomies',
  'hoosier-daddy',
  'fast_and_the_curious',
  'averagestudent',
  'BadKarma',
  'google_was_my_idea',
  'cute.as.ducks',
  'casanova',
  'real_name_hidden',
  'HairyPoppins',
  'fedora_the_explorer',
  'OP_rah',
  'YellowSnowman',
  'JoeNotExotic',
]

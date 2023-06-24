import React from 'react'
import Button from '../../m-blocks/Button'
import { saveScore } from '../../../network/pong/scores'
import GameModal from '../../game-blocks/GameModal'
import Input, { useWithInput } from '../../m-blocks/Input'
import { randomlyPick } from '../../../random'
import H2 from '../../m-blocks/typography/H2'
import H3 from '../../m-blocks/typography/H3'

type PongGameOverModalProps = {
  clickMainMenu: () => void
  score: number
}

const PongGameOverMenu = ({ clickMainMenu: onMainMenu, score }: PongGameOverModalProps) => {
  const nameInput = useWithInput({ placeholder: 'Name For High Score' })

  const onSaveClick = () => {
    saveScore({ name: safeName(), score }).catch(console.error)
    onMainMenu()
  }

  const safeName = (): string => {
    if (!nameInput.value) return randomlyPick(backupNames)
    return nameInput.value
  }

  return (
    <GameModal>
      <H2>{randomlyPick(gameOverMessages)}</H2>
      <H3>Your Score: {score}</H3>
      <Input {...nameInput.bind} />
      <Button onClick={onSaveClick}>Save Score</Button>
      <Button onClick={onMainMenu}>Main Menu</Button>
    </GameModal>
  )
}

export default PongGameOverMenu

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

const gameOverMessages = [
  'Nice Work!',
  'Way to Go!',
  'Awesome!',
  'Brilliant!',
  'Keep it Up!',
  'Impressive!',
  'Not Bad!',
  'Stellar!',
  'Amazing!',
  "You're a Rock Star!",
  'Out of This World!',
  'How About Another?',
  'A High Score?',
  'Did You Rock?',
]

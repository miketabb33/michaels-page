import React, { useState } from 'react'
import Button from '../../m-blocks/Button'
import { saveScore } from '../../../network/pong/scores'
import GameModal from '../../game-blocks/GameModal'
import Input, { useWithInput } from '../../m-blocks/Input'
import { randomlyPick } from '../../../random'
import H2 from '../../m-blocks/typography/H2'
import H3 from '../../m-blocks/typography/H3'
import { pongGameOverMenuBackupNames, pongGameOverMenuGameOverTitles } from './pongGameOverMenuText'

type PongGameOverModalProps = {
  onReturnToMainMenu: () => void
  score: number
}

const PongGameOverMenu = (props: PongGameOverModalProps) => {
  const { score, gameOverTitle, nameInput, onSave, onReturnToMainMenu } = usePongGameOverMenu(props)
  return (
    <GameModal>
      <H2>{gameOverTitle}</H2>
      <H3>Your Score: {score}</H3>
      <Input {...nameInput.bind} />
      <Button onClick={onSave}>Save Score</Button>
      <Button onClick={onReturnToMainMenu}>Main Menu</Button>
    </GameModal>
  )
}

export const usePongGameOverMenu = ({ onReturnToMainMenu, score }: PongGameOverModalProps) => {
  const [gameOverTitle] = useState(randomlyPick(pongGameOverMenuGameOverTitles))
  const nameInput = useWithInput({ placeholder: 'Name For High Score' })

  const onSave = () => {
    saveScore({ name: safeName(), score }).catch(console.error)
    onReturnToMainMenu()
  }

  const safeName = (): string => {
    if (!nameInput.value) return randomlyPick(pongGameOverMenuBackupNames)
    return nameInput.value
  }

  return { score, gameOverTitle, nameInput, onSave, onReturnToMainMenu }
}

export default PongGameOverMenu

import { HighScore, getHighScores } from '../../../network/pong/scores'
import React from 'react'
import Button from '../../m-blocks/Button'
import { useRequest } from '../../../network/useRequest'
import H1 from '../../m-blocks/typography/H1'
import H3 from '../../m-blocks/typography/H3'
import GameModal from '../../game-blocks/GameModal'
import PongHighScores from './PongHighScores'

type PongHighScoreMeneProps = {
  onBack: () => void
}

const PongHighScoreMenu = (props: PongHighScoreMeneProps) => {
  const { highScores, shouldShowLoading, shouldShowHighScores, shouldShowNoHighScores, onBack } =
    usePongHighScoreMenu(props)
  return (
    <GameModal>
      <H1>High Scores!</H1>
      {shouldShowLoading && <H3>Loading...</H3>}
      {shouldShowHighScores && <PongHighScores highScores={highScores || []} />}
      {shouldShowNoHighScores && <H3>No high scores</H3>}
      <Button onClick={onBack}>Back</Button>
    </GameModal>
  )
}

export const usePongHighScoreMenu = ({ onBack }: PongHighScoreMeneProps) => {
  const { data: highScores, isLoading } = useRequest<HighScore[]>({ request: getHighScores })

  const highScoreLength = highScores?.length || 0

  const shouldShowLoading = isLoading
  const shouldShowNoHighScores = !isLoading && highScoreLength === 0
  const shouldShowHighScores = !isLoading && highScoreLength > 0

  return {
    highScores,
    shouldShowLoading,
    shouldShowNoHighScores,
    shouldShowHighScores,
    onBack,
  }
}

export default PongHighScoreMenu

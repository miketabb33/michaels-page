import { HighScore, getHighScores } from '../../../network/pong/scores'
import React from 'react'
import Button from '../../m-blocks/Button'
import { useRequest } from '../../../network/useRequest'
import H1 from '../../m-blocks/typography/H1'
import H3 from '../../m-blocks/typography/H3'
import GameModal from '../../game-blocks/GameModal'

type PongHighScoreMeneProps = {
  clickBack: () => void
}

const PongHighScoreMenu = ({ clickBack }: PongHighScoreMeneProps) => {
  const { data: highScores, isLoading } = useRequest<HighScore[]>({ request: getHighScores })

  return (
    <GameModal>
      <H1>High Scores!</H1>
      {isLoading && <H3>Loading...</H3>}
      <ul>
        {highScores?.map((highScore) => (
          <li key={highScore.id}>{`${highScore.name}: ${highScore.score}`}</li>
        ))}
      </ul>
      <Button onClick={clickBack}>Back</Button>
    </GameModal>
  )
}

export default PongHighScoreMenu

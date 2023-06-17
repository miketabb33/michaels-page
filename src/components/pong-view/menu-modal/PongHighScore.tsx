import { HighScore, getHighScores } from '../../../networking/pong/scores'
import React from 'react'
import Button from '../../m-blocks/Button'
import { useRequest } from '../../../networking/useRequest'
import Typography from '../../m-blocks/Typography'

type PongHighScoreProps = {
  clickBack: () => void
}

const PongHighScore = ({ clickBack }: PongHighScoreProps) => {
  const { data: highScores, isLoading, error } = useRequest<HighScore[]>({ request: getHighScores })

  return (
    <>
      <Typography kind="h1">High Scores!</Typography>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error loading High Scores</h3>}
      <ul>
        {highScores?.map((highScore) => (
          <li key={highScore.id}>{`${highScore.name}: ${highScore.score}`}</li>
        ))}
      </ul>
      <Button onClick={clickBack}>Back</Button>
    </>
  )
}

export default PongHighScore

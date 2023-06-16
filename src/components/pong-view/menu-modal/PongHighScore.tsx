import { HighScore, getHighScores } from '../../../networking/pong/scores'
import React from 'react'
import Button from '../../m-blocks/Button'
import { useRequest } from '../../../networking/useRequest'

type PongHighScoreProps = {
  clickBack: () => void
}

const PongHighScore = ({ clickBack }: PongHighScoreProps) => {
  const { data: highScores, isLoading } = useRequest<HighScore[]>({ request: getHighScores })

  return (
    <>
      <h1>High Scores</h1>
      {isLoading && <h3>Loading...</h3>}
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

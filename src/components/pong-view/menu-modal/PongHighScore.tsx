import { HighScore, getHighScores } from '../../../networking/pong/scores'
import React from 'react'
import Button from '../../m-blocks/Button'
import { useRequest } from '../../../networking/useRequest'
import H1 from '../../m-blocks/typography/H1'
import H3 from '../../m-blocks/typography/H3'

type PongHighScoreProps = {
  clickBack: () => void
}

const PongHighScore = ({ clickBack }: PongHighScoreProps) => {
  const { data: highScores, isLoading } = useRequest<HighScore[]>({ request: getHighScores })

  return (
    <>
      <H1>High Scores!</H1>
      {isLoading && <H3>Loading...</H3>}
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

import React from 'react'
import { HighScore } from '../../../network/pong/scores'
import styled from 'styled-components'

const ListItem = styled.li`
  padding: 0.25rem;
  list-style: decimal;

  &:first-child {
    font-weight: bold;
    font-size: 2.3rem;
  }

  &:last-child {
    font-size: 1.3rem;
  }
`

type PongHighScoresProps = {
  highScores: HighScore[]
}

const PongHighScores = ({ highScores }: PongHighScoresProps) => {
  return (
    <ol>
      {highScores.map((highScore) => (
        <ListItem key={highScore.id}>{`${highScore.name}: ${highScore.score}`}</ListItem>
      ))}
    </ol>
  )
}

export default PongHighScores

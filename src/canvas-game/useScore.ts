import { useState } from 'react'

export const useScore = () => {
  const [score, setScore] = useState(0)
  let inGameScore = 0

  const incrementScore = () => {
    inGameScore += 1
    setScore(inGameScore)
  }

  return {
    score,
    incrementScore,
  }
}
